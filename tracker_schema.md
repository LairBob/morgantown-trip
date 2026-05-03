# Tracker schema — `properties.json`

The single source of truth for our rental candidate research. The interactive map reads it, the future visual comparison tool will read it, and the human discussion (`rental_candidates.md`) is now downstream of it. Edit the JSON; everything else follows.

## Top-level structure

```
{
  "$schema_version": "1.0.0",
  "$last_updated":  "YYYY-MM-DD",
  "$notes":         "free-form file-level notes",

  "trip":            { ...trip facts and requirements... },
  "areas":           [ ...coarse area buckets, with centroids... ],
  "market_context":  { ...AirDNA-style frame for budget bracketing... },
  "properties":      [ ...candidate rentals... ],
  "decisions":       [ ...trip-level decisions, append-only... ],
  "shortlist":       [ ...property ids in priority order... ],
  "open_questions":  [ ...unresolved questions guiding the next pass... ]
}
```

The `$`-prefixed fields are metadata about the document itself. Everything else is data.

## `areas`

Coarse buckets keyed to character, not strict geography. Each area has a `centroid` (lat/lng) used by the map as a fallback marker position when a property has no verified address. The `neighborhood_ids` array cross-references the historic-neighborhood IDs already defined inside `morgantown_map.html` (`downtown`, `south-park`, `wiles-hill`, etc.) — empty for areas outside the city map (Cheat Lake, Cooper's Rock).

## `properties` — the heart of the tracker

Each property is an object with the fields below. Required fields are marked with `*`.

| Field | Type | Notes |
|------|------|------|
| `id`* | string | Stable kebab-case slug. Don't change this once set — discussion entries reference it implicitly. |
| `name`* | string | Human display name. May change without breaking anything. |
| `status`* | enum | `needs_verification` · `candidate` · `shortlist` · `held` · `booked` · `rejected` |
| `platform` | enum | `airbnb` · `vrbo` · `evolve` · `booking` · `direct` · `other` · `null` |
| `listing_id` | string\|null | Platform-specific ID. |
| `url` | string\|null | Direct listing URL. |
| `alt_urls` | array | For cross-listed properties. Each entry: `{platform, url}`. |
| `type` | enum | `whole-house` · `apartment` · `townhouse` · `cabin` · `condo` · `operator` · `other` |
| `area_id`* | string | References `areas[].id`. |
| `neighborhood_id` | string\|null | Optional finer pin to a historic neighborhood from the map. |
| `area_id_alternates` | array | When a listing legitimately surfaces under more than one area. |
| `location` | object | `{address, lat, lng, geocoded}`. Populate `lat`/`lng` once a verified address exists; otherwise the map uses area centroid + jitter. |
| `specs` | object | `{bedrooms, bathrooms, sleeps, sq_ft, beds, beds_config}`. Use `null` for unknown. |
| `kitchen` | object | `{quality: "basic"\|"good"\|"excellent"\|null, notes}`. The trip explicitly cares about cooking. |
| `amenities` | string[] | Canonical kebab-case tags: `hot-tub`, `deck`, `grill`, `fireplace`, `balcony`, `central-ac`, `parking`, `wifi-high-speed`, etc. Add new ones freely; we'll canonicalize at the comparison-tool stage. |
| `pricing` | object | `{currency, advertised_nightly_avg, estimated_total_3_nights, fees_estimate, quoted_for_trip_dates, as_of, source}`. `quoted_for_trip_dates` becomes `true` only after we've pulled a real quote for June 12–15. |
| `ratings` | object | `{score, score_scale, review_count, source}`. `score_scale` defaults to 5 for Airbnb; explicitly set to 10 for VRBO. |
| `verification` | object | `{url_confirmed, specs_confirmed, availability_checked_for_trip, last_checked}`. Bookkeeping for what we've actually checked vs. inferred. |
| `tags` | string[] | Free-form sortable/filterable tags for the comparison tool. |
| `discussion`* | array | Append-only log of notes/concerns/preferences/decisions. See below. |

### Status semantics

- **`needs_verification`** — we have a name and possibly a URL but haven't confirmed bedroom count, kitchen, or other key specs. Don't treat as a real candidate yet.
- **`candidate`** — basic verification done; in the active comparison pool.
- **`shortlist`** — actively under consideration. Map renders these larger and with full opacity.
- **`held`** — placed a hold or extended courtesy-block; shouldn't be promoted/demoted casually.
- **`booked`** — done. Render full saturation.
- **`rejected`** — eliminated, but kept in the file for audit trail. Map renders these faded gray.

### Discussion entries — append-only history

Every property has a `discussion` array. New entries append to the end; existing entries are never edited or removed. This is how the tracker preserves the history of our consideration.

```json
{
  "ts":   "2026-05-02",
  "by":   "claude" | "laurent" | "<friend1>" | "<friend2>",
  "type": "intake" | "note" | "concern" | "preference" | "comparison" | "decision" | "revision",
  "text": "free-form prose"
}
```

`type` conventions:

- **`intake`** — first-time entry into the tracker.
- **`note`** — an observation that doesn't change status.
- **`concern`** — something that might disqualify the property (single bath, noise, parking).
- **`preference`** — one of the three of us (or all three) flagging this as wanted or unwanted.
- **`comparison`** — observations made in the context of comparing this property to another (reference the other by `id` in the text).
- **`decision`** — a status change is being recorded. Pair this with an actual update to the `status` field.
- **`revision`** — a correction to an earlier entry (e.g., spec confirmed differently than originally noted).

The `decisions` array at the top level is for trip-wide decisions that don't belong to any single property ("we ruled out Cooper's Rock as a class").

## Integration: how the map consumes this

`morgantown_map.html` calls `fetch('properties.json')` on page load and plots each property with status-based marker color and opacity. Properties without verified `lat`/`lng` are placed at their `area_id`'s centroid plus a small deterministic jitter (about 245 m radius) keyed off the `id` — same property always appears in the same spot, but several properties in the same area don't stack.

**File-protocol caveat (and the shim).** Browsers block `fetch()` from `file://`, so direct double-click loading of the HTML pages can't read `properties.json` over the network. The project handles this with a thin shim file: `properties.js`, which is auto-generated from `properties.json` and contains exactly `window.PROPERTIES_DATA = { ... };`. Both `morgantown_map.html` and `compare.html` load it via `<script src="properties.js">` (which works under `file://`), then prefer fetched JSON when available and fall back to the shim otherwise. So:

- Double-click the HTML files to open them — they work directly under `file://` because the shim is loaded as a script.
- After hand-editing `properties.json`, regenerate the shim: `python regen_properties_js.py` from this directory.
- Or serve the folder via `python -m http.server 8000` and open `http://localhost:8000/morgantown_map.html` — fetch then beats the shim and you don't need to regenerate.

The map exposes a `window.MorgantownMap` global with `populateRentals(data)` and `loadTracker()` for live debugging from the browser console — useful when iterating on the JSON without restarting.

## Integration: how the future comparison tool will consume this

Same fetch, different rendering. The comparison tool will need:

- A pivotable specs grid (BR/BA/sleeps/sqft/price) — already structured.
- Filterable tags and amenities — already structured.
- A status-aware sort (shortlist on top, rejected at bottom).
- A discussion-thread view per property — already structured.
- A "what changed since last view" indicator if we keep `$last_updated` honest.

Suggested next: a single-page React or vanilla-JS view that fetches `properties.json`, renders a card grid + table view + per-card discussion, with filters for area, status, BR count, and amenities.

## Working in Pandas / BigQuery

```python
import json
import pandas as pd
data = json.load(open('properties.json'))
df = pd.json_normalize(data['properties'], sep='_')
# now df has columns like specs_bedrooms, location_lat, pricing_advertised_nightly_avg, etc.
```

For BigQuery: load as a single JSON column, then `JSON_VALUE` / `JSON_QUERY` your way through. The schema is stable enough to project into a typed table once we want to.

## Editing conventions

- **Hand-edit freely.** JSON is the single source of truth. The map will pick up changes on next reload.
- **Bump `$last_updated`** when the data changes meaningfully. The map shows it in the rental status note.
- **Append, don't rewrite.** Discussion entries are history; if a previous entry was wrong, add a `revision` entry rather than editing the original.
- **Don't reuse `id`s.** If a property was rejected and a similar one surfaces later, give it a new `id`.
- **Status changes pair with discussion entries.** Always add a `decision`-type discussion entry when changing `status`, so the timeline is intact.

## Scoring — aggregated "Overall" scores

Both neighborhoods and properties carry an aggregated **Overall** score on a 0–5 scale, computed as a weighted sum of per-dimension subscores. The weights live at the top level of the tracker under `scoring`; tweak them and everything downstream re-ranks.

### Neighborhoods

Four base attributes drive the overall, each on a 0–5 goodness scale:

| Attribute | Weight | Direction | Notes |
|-----------|--------|-----------|------|
| `price`    | 0.25 | `desc` (cheaper is better) | Goodness is the inverted normalized rank against the neighborhood price range. |
| `walk`     | 0.30 | `asc` | Trip-specific bias: we want to walk to dinner. |
| `quiet`    | 0.25 | `asc` | Three sixty-year-olds, sleep matters. |
| `historic` | 0.20 | `asc` | Lower priority but a real interest. |

Computed as `overall = Σ goodness(attr) × weight(attr)`. The map computes this live (`window.MorgantownMap.neighborhoodOverall`); the same weights are mirrored in `properties.json` under `scoring.neighborhoods.weights` for consumers that don't run the map (Pandas, BigQuery, the future comparison tool). **Keep the two in sync** — if you change the weights in the JSON, mirror them in `morgantown_map.html`'s `attributes` array.

### Properties

Five derived dimensions, each on a 0–5 scale; `overall = Σ dim × weight`:

| Dimension | Weight | What it captures |
|-----------|--------|-----------------|
| `spec_fit`   | 0.30 | Mean of bedroom/bathroom/sleeps fitness against the trip requirements. |
| `kitchen`    | 0.20 | Quality enum: `excellent=5`, `good=4`, `basic=2`, `null=2.5` (unknown penalty). |
| `amenities`  | 0.15 | Count of high-value amenities present (hot-tub, fireplace, deck, grill, balcony, two-living-rooms, central-ac, parking, porch), capped at 5. |
| `value`      | 0.20 | Piecewise step function from advertised nightly vs. AirDNA market frame. Missing price defaults to 3 (median assumption). |
| `confidence` | 0.15 | Bookkeeping: `url_confirmed × 1.5 + specs_confirmed × 1.5 + availability_checked × 0.5 + min(1.5, log10(reviews+1) × 0.5)`. Capped at 5. |

Subscores are stored on each property under `scores` as a derived snapshot — they should be regenerated whenever raw data changes. The exact formulas live in `scoring.properties.formulas` in the JSON itself, so anyone reading the tracker can audit and tune.

### Why these weights, why this scale

The 0–5 scale matches the existing per-attribute scoring on neighborhoods, so a 3.5 anywhere in the system means the same thing. The weights encode this trip's priorities — they are not market-neutral. If we decide we don't actually care about historic character, drop `historic` to 0.05 and redistribute. The point of separating weights from data is that retuning is a one-line change and the rankings re-flow.

`confidence` is deliberately included so unverified ghost candidates don't beat well-known ones on amenity counts alone. A spec-fit-perfect property with no confirmed URL still scores low on confidence and can't sneak past a real, reviewed candidate.

### Regenerating property scores

There's no auto-watch yet. After editing raw fields (specs, pricing, amenities, verification flags), regenerate:

```python
import json
from math import log10

with open('properties.json') as f: data = json.load(f)
# ... apply the formulas in scoring.properties.formulas to each property ...
with open('properties.json', 'w') as f: json.dump(data, f, indent=2)
```

The initial computation was done this way; a small `score_properties.py` utility could be checked in if we end up retuning frequently.

## Schema versioning

`$schema_version` follows semver. We're at `1.0.0`. Additive field changes (new optional fields, new enum values) are minor bumps. Breaking changes (renaming fields, restructuring objects) are major bumps and require updating the map's loader.
