# Morgantown Trip — planning tools

Long-weekend reunion in Morgantown, WV — three friends from Taft '83, June 12–15, 2026. This repo holds the planning tools we share among ourselves, and the canonical data they read.

## Live site

A static-hosted version of the interactive tools is published from this repo (see Netlify deploy badge once configured). Updates push automatically on every commit.

## Files

| File | Role |
|------|------|
| `properties.json` | Canonical tracker — single source of truth for the candidate rentals, areas, scoring weights, and discussion history. Hand-editable; see `tracker_schema.md` for field semantics. |
| `properties.js` | Auto-generated shim that wraps `properties.json` as `window.PROPERTIES_DATA = {...};`. Lets the HTML pages work under `file://` (where browsers block `fetch()`). Regenerate with `python regen_properties_js.py` after any hand-edit of the JSON. |
| `morgantown_map.html` | Leaflet-based area map. Shows historic neighborhoods with weighted attribute scores and overall ranking. Loads candidate rentals as markers, color-coded by status, with popups carrying overall + subscores. |
| `compare.html` | Card-grid comparison view. Per-area cost-range strips against the AirDNA market frame, top candidates ranked by overall score, range-establishing samples below. |
| `tracker_schema.md` | Schema reference for `properties.json` — top-level structure, status enum, scoring formulas, integration notes. |
| `rental_candidates.md` | Narrative companion — a snapshot of the early representative survey, kept for the prose discussion of what each area produces. |
| `regen_properties_js.py` | One-line utility to regenerate `properties.js` from `properties.json`. |

## How it works

`properties.json` is the source. The two HTML pages each preferentially load it via `fetch()`, falling back to the `properties.js` shim under `file://`. Add or edit a property in the JSON, push, and both views (map + compare) reflect the change on next load.

The scoring system has two halves — a per-area weighted overall for neighborhoods, and a per-property weighted overall combining spec fit / kitchen / amenities / value / confidence. Weights live at the top of `properties.json` under `scoring`, so retuning the trip's priorities is a single edit. See `tracker_schema.md` for formulas.

## Editing workflow

1. Edit `properties.json` (or have Claude edit it via Cowork).
2. Run `python regen_properties_js.py` to refresh the shim.
3. Commit and push. Netlify rebuilds automatically.

## Working in Pandas / BigQuery

```python
import json, pandas as pd
data = json.load(open('properties.json'))
df = pd.json_normalize(data['properties'], sep='_')
```

For BigQuery: load as a single JSON column, then `JSON_VALUE` / `JSON_QUERY` your way through.

## Status

Active as of 2026-05-02. Trip is June 12–15, 2026.
