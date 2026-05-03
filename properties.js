// AUTO-GENERATED from properties.json. Do not hand-edit.
// Regenerate by running: python regen_properties_js.py
// (or ask Claude to refresh it after a JSON change).
window.PROPERTIES_DATA = {
  "$schema_version": "1.0.0",
  "$last_updated": "2026-05-02",
  "$notes": "Canonical tracker for Morgantown trip rental candidates. Hand-edit freely. Append discussion entries; never rewrite history. See tracker_schema.md for field semantics.",
  "trip": {
    "name": "Morgantown Reunion",
    "checkin": "2026-06-12",
    "checkout": "2026-06-15",
    "nights": 3,
    "guests": 3,
    "guest_profile": "Three 60-year-old male friends, Taft '83 reunion",
    "requirements": {
      "bedrooms_min": 3,
      "kitchen_quality_min": "good",
      "cook_at_home_nights": [
        "2026-06-13",
        "2026-06-14"
      ],
      "must_haves": [
        "3 separate bedrooms",
        "real kitchen for cooking dinner"
      ],
      "nice_to_haves": [
        "walkable to dinner",
        "deck or porch",
        "hot tub",
        "parking for 3 vehicles"
      ]
    }
  },
  "areas": [
    {
      "id": "in-town-walkable",
      "name": "In-town walkable",
      "summary": "Postcard option \u2014 walk across the Walnut Street pedestrian bridge to High Street and back. Older housing stock, often with single bathrooms in 3 BR units.",
      "centroid": {
        "lat": 39.6298,
        "lng": -79.9565
      },
      "neighborhood_ids": [
        "downtown",
        "south-park",
        "wiles-hill",
        "first-ward",
        "greenmont",
        "woodburn",
        "jerome-park"
      ],
      "cost_range_usd": {
        "low": 150,
        "high": 260,
        "confidence": "estimated",
        "notes": "Postcard premium for South Park; value at Greenmont."
      }
    },
    {
      "id": "suncrest",
      "name": "Suncrest / WVU-adjacent",
      "summary": "Postwar suburban \u2014 newer kitchens, larger lots, hot tubs and decks. Deepest 3 BR vacation-rental inventory. 5\u201310 minutes' drive to downtown for dinner.",
      "centroid": {
        "lat": 39.651,
        "lng": -79.969
      },
      "neighborhood_ids": [
        "suncrest"
      ],
      "cost_range_usd": {
        "low": 130,
        "high": 230,
        "confidence": "estimated",
        "notes": "Postwar suburban. Newer with hot tub at upper end; smaller older at lower."
      }
    },
    {
      "id": "westover",
      "name": "Westover / across-river",
      "summary": "Separate municipality across the Monongahela. Often the value position in the market \u2014 older small-house stock, quirkier layouts.",
      "centroid": {
        "lat": 39.63,
        "lng": -79.974
      },
      "neighborhood_ids": [
        "westover"
      ],
      "cost_range_usd": {
        "low": 115,
        "high": 180,
        "confidence": "partly_anchored",
        "notes": "Enchanting Family House at $137/night anchors the lower-middle. Cross-river undercut 10-20%."
      }
    },
    {
      "id": "cheat-lake",
      "name": "Cheat Lake",
      "summary": "Lake-house feel \u2014 decks, hot tubs, water views \u2014 about 10 minutes east. Property becomes the destination; would drive in for any meal out.",
      "centroid": {
        "lat": 39.665,
        "lng": -79.855
      },
      "neighborhood_ids": [],
      "cost_range_usd": {
        "low": 180,
        "high": 400,
        "confidence": "estimated",
        "notes": "Lake premium. Cottages low; 1,800-sqft luxury at top."
      }
    },
    {
      "id": "coopers-rock",
      "name": "Cooper's Rock corridor",
      "summary": "Cabin in the woods \u2014 state-forest hinterland, 20\u201330 minutes east. Full retreat character. Strict 3 BR + good kitchen filter is harder to satisfy here.",
      "centroid": {
        "lat": 39.647,
        "lng": -79.791
      },
      "neighborhood_ids": [],
      "cost_range_usd": {
        "low": 150,
        "high": 350,
        "confidence": "estimated",
        "notes": "Wide spread. 2 BR cabins low; lodges or combos high."
      }
    },
    {
      "id": "star-city",
      "name": "Star City / Mon River corridor",
      "summary": "Sparse vacation-rental inventory north of town. Better as a daytime trail destination than a base.",
      "centroid": {
        "lat": 39.652,
        "lng": -79.983
      },
      "neighborhood_ids": [
        "star-city"
      ],
      "cost_range_usd": {
        "low": 90,
        "high": 160,
        "confidence": "estimated",
        "notes": "Sparse, older small homes."
      }
    }
  ],
  "market_context": {
    "source": "AirDNA Morgantown",
    "as_of": "2026-05-02",
    "url": "https://www.airdna.co/vacation-rental-data/app/us/west-virginia/morgantown/overview",
    "nightly_rate_distribution_usd": {
      "bottom_quartile": 85,
      "median": 125,
      "top_quartile": 193,
      "top_decile": 295,
      "average": 189
    }
  },
  "properties": [
    {
      "id": "beech-house",
      "name": "Beech House \u2014 Large 3 BR w/ Deck & Grill",
      "status": "candidate",
      "platform": "airbnb",
      "listing_id": "634034802185517819",
      "url": "https://www.airbnb.com/rooms/634034802185517819",
      "type": "whole-house",
      "area_id": "in-town-walkable",
      "neighborhood_id": null,
      "location": {
        "address": null,
        "lat": null,
        "lng": null,
        "geocoded": false
      },
      "specs": {
        "bedrooms": 3,
        "bathrooms": 2.5,
        "sleeps": 8,
        "beds": 4,
        "sq_ft": null
      },
      "kitchen": {
        "quality": null,
        "notes": null
      },
      "amenities": [
        "deck",
        "grill"
      ],
      "pricing": {
        "currency": "USD",
        "advertised_nightly_avg": 237,
        "estimated_total_3_nights": 712,
        "fees_estimate": null,
        "quoted_for_trip_dates": true,
        "as_of": "2026-05-02",
        "list_price_3_nights": 797,
        "discount_applied_3_nights": 85,
        "note": "Discounted from $797 to $712 for 3 nights."
      },
      "ratings": {
        "score": 4.89,
        "score_scale": 5,
        "review_count": 64,
        "source": "airbnb"
      },
      "verification": {
        "url_confirmed": true,
        "specs_confirmed": true,
        "availability_checked_for_trip": true,
        "last_checked": "2026-05-02"
      },
      "tags": [
        "available-for-trip",
        "deck",
        "discounted",
        "grill",
        "guest-favorite",
        "rare-find",
        "superhost",
        "whole-house"
      ],
      "discussion": [
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "intake",
          "text": "Added during initial representative survey. URL confirmed; bedroom count, bathrooms, kitchen quality, and pricing all need verification at next pass."
        },
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "note",
          "text": "Chrome MCP: AVAILABLE for June 12-15. Discounted from $797 to $712/3 nights. Specs confirmed: 8-guest cap, 3 BR, 4 beds, 2.5 baths. 4.89/64 reviews. Guest favorite, \"rare find \u2014 usually booked.\" Hosted by Damien, Superhost, 5 years. Major upward revision likely once specs and ratings flow into the score."
        }
      ],
      "scores": {
        "_doc": "Derived from raw fields per scoring.properties.formulas. Regenerate when raw data changes.",
        "spec_fit": 4.33,
        "kitchen": 2.5,
        "amenities": 2,
        "value": 2.5,
        "confidence": 4.41,
        "overall": 3.26
      },
      "availability": {
        "status": "available",
        "as_of": "2026-05-02",
        "checked_via": "chrome-mcp",
        "notes": "$712 total (down from $797). \"Rare find\" \u2014 usually booked. Hosted by Damien, Superhost, 5 years."
      }
    },
    {
      "id": "wilson-house",
      "name": "Wilson House",
      "status": "rejected",
      "platform": "airbnb",
      "listing_id": "1089254414490845750",
      "url": "https://www.airbnb.com/rooms/1089254414490845750",
      "type": "whole-house",
      "area_id": "in-town-walkable",
      "neighborhood_id": null,
      "location": {
        "address": null,
        "lat": null,
        "lng": null,
        "geocoded": false
      },
      "specs": {
        "bedrooms": 2,
        "bathrooms": 1,
        "sleeps": 5,
        "beds": 2,
        "sq_ft": null
      },
      "kitchen": {
        "quality": null,
        "notes": null
      },
      "amenities": [],
      "pricing": {
        "currency": "USD",
        "advertised_nightly_avg": 156,
        "estimated_total_3_nights": 468,
        "quoted_for_trip_dates": true,
        "as_of": "2026-05-02"
      },
      "ratings": {
        "score": 4.93,
        "score_scale": 5,
        "review_count": 74,
        "source": "airbnb"
      },
      "verification": {
        "url_confirmed": true,
        "specs_confirmed": true,
        "availability_checked_for_trip": true,
        "last_checked": "2026-05-02"
      },
      "tags": [
        "whole-house",
        "near-downtown",
        "near-wvu"
      ],
      "discussion": [
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "intake",
          "text": "Surfaced as 'whole house, within ~1 mile of downtown and WVU campus.' Bedroom count appeared in 3-BR-filtered search results but is not confirmed from the listing title \u2014 needs verification."
        },
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "decision",
          "text": "Chrome MCP: Available, but specs confirm only 2 BEDROOMS \u2014 fails the 3 BR minimum hard requirement. Earlier search results were misleading. Available at $468/3 nights, 4.93/74 reviews, Superhost Mary Beth, but disqualified for bedroom count. Status: rejected."
        }
      ],
      "scores": {
        "_doc": "Derived from raw fields per scoring.properties.formulas. Regenerate when raw data changes.",
        "spec_fit": 2.5,
        "kitchen": 2.5,
        "amenities": 0,
        "value": 4,
        "confidence": 4.44,
        "overall": 2.72
      },
      "availability": {
        "status": "available",
        "as_of": "2026-05-02",
        "checked_via": "chrome-mcp",
        "notes": "$468/3 nights, available \u2014 but only 2 BR."
      }
    },
    {
      "id": "south-park-3br-1ba",
      "name": "Downtown 3BR (Airbnb 916139458128118623)",
      "status": "rejected",
      "platform": "airbnb",
      "listing_id": "916139458128118623",
      "url": "https://www.airbnb.com/rooms/916139458128118623",
      "type": "apartment",
      "area_id": "in-town-walkable",
      "neighborhood_id": "downtown",
      "location": {
        "address": null,
        "lat": null,
        "lng": null,
        "geocoded": false
      },
      "specs": {
        "bedrooms": 3,
        "bathrooms": 1,
        "sleeps": 6,
        "beds": 3,
        "sq_ft": null
      },
      "kitchen": {
        "quality": null,
        "notes": null
      },
      "amenities": [],
      "pricing": {
        "currency": "USD",
        "advertised_nightly_avg": null,
        "estimated_total_3_nights": null,
        "fees_estimate": null,
        "quoted_for_trip_dates": false,
        "as_of": null
      },
      "ratings": {
        "score": 4.91,
        "score_scale": 5,
        "review_count": 247,
        "source": "airbnb"
      },
      "verification": {
        "url_confirmed": true,
        "specs_confirmed": true,
        "availability_checked_for_trip": true,
        "last_checked": "2026-05-02"
      },
      "tags": [
        "free-parking",
        "high-rated",
        "single-bath",
        "whole-house"
      ],
      "discussion": [
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "intake",
          "text": "Highly-rated 3 BR. Single bathroom worth flagging \u2014 fine for three friends but should be explicit in any decision discussion."
        },
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "decision",
          "text": "Chrome MCP: NOT AVAILABLE for June 12-15. Airbnb shows \"Those dates are not available.\" Categorization corrections: real title is \"Downtown 3BR | Free Parking & Spacious Stay\" \u2014 it is downtown, not South Park; type is apartment (rental unit), not whole-house. 247 reviews at 4.91 \u2014 strong host operation. Status moved to rejected."
        }
      ],
      "scores": {
        "_doc": "Derived from raw fields per scoring.properties.formulas. Regenerate when raw data changes.",
        "spec_fit": 3.33,
        "kitchen": 2.5,
        "amenities": 0,
        "value": 3,
        "confidence": 4.7,
        "overall": 2.8
      },
      "availability": {
        "status": "blocked",
        "as_of": "2026-05-02",
        "checked_via": "chrome-mcp",
        "notes": "Airbnb explicitly shows: \"Those dates are not available.\" Strike from active candidates."
      }
    },
    {
      "id": "chancery-hill-hidden-gem",
      "name": "The Hidden Gem \u2014 Chancery Hill Historic District",
      "status": "needs_verification",
      "platform": "airbnb",
      "listing_id": null,
      "url": null,
      "type": "whole-house",
      "area_id": "in-town-walkable",
      "neighborhood_id": "downtown",
      "location": {
        "address": null,
        "lat": null,
        "lng": null,
        "geocoded": false
      },
      "specs": {
        "bedrooms": null,
        "bathrooms": null,
        "sleeps": null,
        "sq_ft": null
      },
      "kitchen": {
        "quality": null,
        "notes": null
      },
      "amenities": [],
      "pricing": {
        "currency": "USD",
        "advertised_nightly_avg": null,
        "estimated_total_3_nights": null,
        "fees_estimate": null,
        "quoted_for_trip_dates": false,
        "as_of": null
      },
      "ratings": {
        "score": null,
        "review_count": null,
        "source": null
      },
      "verification": {
        "url_confirmed": false,
        "specs_confirmed": false,
        "availability_checked_for_trip": false,
        "last_checked": "2026-05-02"
      },
      "tags": [
        "historic-district",
        "type-example"
      ],
      "discussion": [
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "intake",
          "text": "Mentioned in search results as 'tucked away in the Chancery Hill Historic District in downtown Morgantown, located in a quiet neighborhood and within walking distance to the downtown WVU campus.' URL not pinned. Keep as a type-example until we either find the listing or remove."
        }
      ],
      "scores": {
        "_doc": "Derived from raw fields per scoring.properties.formulas. Regenerate when raw data changes.",
        "spec_fit": 2.0,
        "kitchen": 2.5,
        "amenities": 0,
        "value": 3,
        "confidence": 0,
        "overall": 1.7
      },
      "availability": {
        "status": "unknown",
        "as_of": null,
        "checked_via": null,
        "notes": "Not yet checked. Open listing URL with dates 2026-06-12 / 2026-06-15."
      }
    },
    {
      "id": "suncrest-haven",
      "name": "Suncrest Haven \u2014 Close to WVU/Hospitals",
      "status": "candidate",
      "platform": "airbnb",
      "listing_id": "43868312",
      "url": "https://www.airbnb.com/rooms/43868312",
      "type": "whole-house",
      "area_id": "suncrest",
      "neighborhood_id": "suncrest",
      "location": {
        "address": null,
        "lat": null,
        "lng": null,
        "geocoded": false
      },
      "specs": {
        "bedrooms": 3,
        "bathrooms": 2,
        "sleeps": 7,
        "beds": 5,
        "sq_ft": null,
        "sleeps_min": null
      },
      "kitchen": {
        "quality": "good",
        "notes": "Beautiful kitchen mentioned in listing"
      },
      "amenities": [
        "hot-tub",
        "deck",
        "fireplace",
        "parking-4-5",
        "wifi-high-speed"
      ],
      "pricing": {
        "currency": "USD",
        "advertised_nightly_avg": 275,
        "estimated_total_3_nights": 826,
        "fees_estimate": "included",
        "quoted_for_trip_dates": true,
        "as_of": "2026-05-02",
        "fees_included_in_total": true
      },
      "ratings": {
        "score": 4.92,
        "score_scale": 5,
        "review_count": 144,
        "source": "airbnb"
      },
      "verification": {
        "url_confirmed": true,
        "specs_confirmed": true,
        "availability_checked_for_trip": true,
        "last_checked": "2026-05-02"
      },
      "tags": [
        "available-for-trip",
        "deck",
        "fireplace",
        "guest-favorite",
        "high-rated",
        "hot-tub",
        "many-reviews",
        "near-hospital",
        "near-wvu",
        "top-10-percent",
        "whole-house"
      ],
      "discussion": [
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "intake",
          "text": "Strong review profile (138 reviews, 4.93). Sleeps 6\u20138 means generous personal space for three friends. ~1 mi to WVU Evansdale and Ruby Memorial. Hot tub, deck, fireplace, full kitchen. One of the strongest specs-on-paper candidates in the survey."
        },
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "note",
          "text": "Chrome MCP availability check confirmed: AVAILABLE for June 12-15 at $826 total / 3 nights, all fees included (~$275/night). Specs confirmed: 7 guest cap, 3 BR, 5 beds, 2 baths. 4.92 from 144 reviews. Guest favorite, top 10% of homes per Airbnb. Hosted by Carmen, 10 years."
        }
      ],
      "scores": {
        "_doc": "Derived from raw fields per scoring.properties.formulas. Regenerate when raw data changes.",
        "spec_fit": 4.0,
        "kitchen": 4,
        "amenities": 4,
        "value": 2,
        "confidence": 4.58,
        "overall": 3.69
      },
      "availability": {
        "status": "available",
        "as_of": "2026-05-02",
        "checked_via": "chrome-mcp",
        "notes": "3 nights at $826 total, all fees included. Free cancellation before May 13.",
        "free_cancellation_until": "2026-05-13"
      },
      "host": "Carmen, 10 years hosting"
    },
    {
      "id": "enchanting-family-house",
      "name": "Enchanting Family House w/ Balcony \u2014 < 3 Mi to WVU",
      "status": "candidate",
      "platform": "vrbo",
      "listing_id": "9482360ha",
      "url": "https://www.vrbo.com/9482360ha",
      "alt_urls": [
        {
          "platform": "evolve",
          "url": "https://evolve.com/vacation-rentals/us/wv/morgantown/441876"
        }
      ],
      "type": "whole-house",
      "area_id": "westover",
      "neighborhood_id": "westover",
      "area_id_alternates": [
        "suncrest"
      ],
      "location": {
        "address": null,
        "lat": null,
        "lng": null,
        "geocoded": false
      },
      "specs": {
        "bedrooms": 3,
        "bathrooms": 2,
        "sleeps": 5,
        "sq_ft": 1450,
        "beds_config": "1 queen + 1 double + 1 twin"
      },
      "kitchen": {
        "quality": null,
        "notes": "Full kitchen present"
      },
      "amenities": [
        "balcony"
      ],
      "pricing": {
        "currency": "USD",
        "advertised_nightly_avg": 239,
        "estimated_total_3_nights": 718,
        "fees_estimate": "included",
        "quoted_for_trip_dates": true,
        "as_of": "2026-05-02",
        "note": "Quoted for 2 travelers; with 3 may shift slightly. Was previously listed avg $137 \u2014 current quote is higher.",
        "fees_included_in_total": true
      },
      "ratings": {
        "score": 9.8,
        "score_scale": 10,
        "review_count": 50,
        "source": "vrbo"
      },
      "verification": {
        "url_confirmed": true,
        "specs_confirmed": true,
        "availability_checked_for_trip": true,
        "last_checked": "2026-05-02"
      },
      "tags": [
        "available-for-trip",
        "balcony",
        "concrete-quote",
        "exceptional-rating",
        "median-priced",
        "twin-bed-flag",
        "whole-house"
      ],
      "discussion": [
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "intake",
          "text": "The most concrete pricing data point in the survey: $137/night listed average, putting it solidly in the city-wide median band. Cross-listed on VRBO and Evolve. Sleeps 5 \u2014 fine for three but not generous. Area assignment ambiguous: surfaces under both Suncrest and Westover queries."
        },
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "note",
          "text": "Chrome MCP check: AVAILABLE for June 12-15 at $718/3 nights (\u2248$239/night, all fees included). Note: the earlier $137/night listed average is much lower than the actual quote \u2014 could be seasonal or have shifted. Bed config confirmed: queen + double + twin. The twin bed for an adult is worth flagging in our discussion. 9.8/10 over 50 reviews."
        }
      ],
      "scores": {
        "_doc": "Derived from raw fields per scoring.properties.formulas. Regenerate when raw data changes.",
        "spec_fit": 3.67,
        "kitchen": 2.5,
        "amenities": 1,
        "value": 2.5,
        "confidence": 4.35,
        "overall": 2.9
      },
      "availability": {
        "status": "available",
        "as_of": "2026-05-02",
        "checked_via": "chrome-mcp",
        "notes": "3 nights at $718 total, all fees included. Free cancellation before May 29.",
        "free_cancellation_until": "2026-05-29"
      }
    },
    {
      "id": "suncrest-3br-25ba",
      "name": "Morgantown House (Airbnb 27955982)",
      "status": "candidate",
      "platform": "airbnb",
      "listing_id": "27955982",
      "url": "https://www.airbnb.com/rooms/27955982",
      "type": "whole-house",
      "area_id": "suncrest",
      "neighborhood_id": "suncrest",
      "location": {
        "address": null,
        "lat": null,
        "lng": null,
        "geocoded": false
      },
      "specs": {
        "bedrooms": 3,
        "bathrooms": 2.5,
        "sleeps": 6,
        "beds": 4,
        "sq_ft": null
      },
      "kitchen": {
        "quality": null,
        "notes": null
      },
      "amenities": [],
      "pricing": {
        "currency": "USD",
        "advertised_nightly_avg": 298,
        "estimated_total_3_nights": 895,
        "fees_estimate": null,
        "quoted_for_trip_dates": true,
        "as_of": "2026-05-02",
        "list_price_3_nights": 1275,
        "discount_applied_3_nights": 380,
        "note": "Discounted from $1,275 to $895 for 3 nights."
      },
      "ratings": {
        "score": 4.69,
        "score_scale": 5,
        "review_count": 117,
        "source": "airbnb"
      },
      "verification": {
        "url_confirmed": true,
        "specs_confirmed": true,
        "availability_checked_for_trip": true,
        "last_checked": "2026-05-02"
      },
      "tags": [
        "ample-bathrooms",
        "available-for-trip",
        "discounted",
        "spacious",
        "superhost",
        "whole-house"
      ],
      "discussion": [
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "intake",
          "text": "2.5 baths and 4 beds across 3 bedrooms \u2014 more comfortable for three adult men than the single-bath in-town options. Lower review score (4.67) than other candidates worth a closer read."
        },
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "note",
          "text": "Chrome MCP: AVAILABLE for June 12-15. Discounted from $1,275 to $895/3 nights. Specs confirmed: 6 guests, 3 BR, 4 beds, 2.5 baths. Real listing title is \"Morgantown House\" \u2014 generic name, was not surfaced as Suncrest in the listing itself. Re-verify the area_id is correct. 4.69/117 reviews \u2014 Superhost Kayla, 8 years."
        }
      ],
      "scores": {
        "_doc": "Derived from raw fields per scoring.properties.formulas. Regenerate when raw data changes.",
        "spec_fit": 4.33,
        "kitchen": 2.5,
        "amenities": 0,
        "value": 2,
        "confidence": 4.54,
        "overall": 2.88
      },
      "availability": {
        "status": "available",
        "as_of": "2026-05-02",
        "checked_via": "chrome-mcp",
        "notes": "$895 total (down from $1,275). \"Add a night for $210\" extension offer for 6/16. Hosted by Kayla, Superhost, 8 years."
      }
    },
    {
      "id": "luxurious-morgantown-retreat",
      "name": "Luxurious Morgantown Retreat w/ Stunning Views",
      "status": "rejected",
      "platform": "vrbo",
      "listing_id": "9888312ha",
      "url": "https://www.vrbo.com/9888312ha",
      "type": "whole-house",
      "area_id": "cheat-lake",
      "neighborhood_id": null,
      "location": {
        "address": null,
        "lat": null,
        "lng": null,
        "geocoded": false
      },
      "specs": {
        "bedrooms": 3,
        "bathrooms": 3,
        "sleeps": 6,
        "sq_ft": 1800
      },
      "kitchen": {
        "quality": null,
        "notes": null
      },
      "amenities": [
        "central-ac",
        "smart-tv",
        "two-living-rooms",
        "parking"
      ],
      "pricing": {
        "currency": "USD",
        "advertised_nightly_avg": null,
        "estimated_total_3_nights": null,
        "fees_estimate": null,
        "quoted_for_trip_dates": false,
        "as_of": null
      },
      "ratings": {
        "score": 10,
        "score_scale": 10,
        "review_count": 18,
        "source": "vrbo"
      },
      "verification": {
        "url_confirmed": true,
        "specs_confirmed": true,
        "availability_checked_for_trip": true,
        "last_checked": "2026-05-02"
      },
      "tags": [
        "whole-house",
        "spacious",
        "lake-area",
        "splurge"
      ],
      "discussion": [
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "intake",
          "text": "The 'splurge but still 3 BR' anchor for the Cheat Lake bucket. 1,800 sq ft, two living rooms, 3 full baths \u2014 the most spacious option in the survey. Pricing not yet pulled."
        },
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "decision",
          "text": "Chrome MCP check: NOT AVAILABLE for June 12-15. VRBO returns \"This property is not available for your dates.\" Status moved to rejected. Specs confirmed: 3 BR / 3 BA / sleeps 6 / 1,800 sqft. 10/10 over 18 reviews. Walkable to WVU (19 min) \u2014 surprising for a property tagged Cheat Lake; might actually be in town."
        }
      ],
      "scores": {
        "_doc": "Derived from raw fields per scoring.properties.formulas. Regenerate when raw data changes.",
        "spec_fit": 4.33,
        "kitchen": 2.5,
        "amenities": 3,
        "value": 3,
        "confidence": 4.14,
        "overall": 3.47
      },
      "availability": {
        "status": "blocked",
        "as_of": "2026-05-02",
        "checked_via": "chrome-mcp",
        "notes": "VRBO explicitly shows: \"This property is not available for your dates on Vrbo.\" Strike from active candidates."
      }
    },
    {
      "id": "lovely-lake-house",
      "name": "Our Lovely Lake House",
      "status": "needs_verification",
      "platform": "vrbo",
      "listing_id": null,
      "url": null,
      "type": "whole-house",
      "area_id": "cheat-lake",
      "neighborhood_id": null,
      "location": {
        "address": null,
        "lat": null,
        "lng": null,
        "geocoded": false
      },
      "specs": {
        "bedrooms": 3,
        "bathrooms": 2,
        "sleeps": 9,
        "sq_ft": null
      },
      "kitchen": {
        "quality": null,
        "notes": null
      },
      "amenities": [],
      "pricing": {
        "currency": "USD",
        "advertised_nightly_avg": null,
        "estimated_total_3_nights": null,
        "fees_estimate": null,
        "quoted_for_trip_dates": false,
        "as_of": null
      },
      "ratings": {
        "score": 10,
        "score_scale": 10,
        "review_count": 8,
        "source": "vrbo"
      },
      "verification": {
        "url_confirmed": false,
        "specs_confirmed": false,
        "availability_checked_for_trip": false,
        "last_checked": "2026-05-02"
      },
      "tags": [
        "whole-house",
        "lake-area",
        "high-rated",
        "type-example"
      ],
      "discussion": [
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "intake",
          "text": "Surfaced via VRBO Cheat Lake catalog (https://www.vrbo.com/vacation-rentals/houses/usa/west-virginia/cheat-lake) but specific listing URL not pinned. 10/10 rating with 8 reviews suggests a good operator. Sleeps 9 means generous personal space."
        }
      ],
      "scores": {
        "_doc": "Derived from raw fields per scoring.properties.formulas. Regenerate when raw data changes.",
        "spec_fit": 4.0,
        "kitchen": 2.5,
        "amenities": 0,
        "value": 3,
        "confidence": 0.48,
        "overall": 2.37
      },
      "availability": {
        "status": "unknown",
        "as_of": null,
        "checked_via": null,
        "notes": "Not yet checked. Open listing URL with dates 2026-06-12 / 2026-06-15."
      }
    },
    {
      "id": "escape-pod-cheat-lake",
      "name": "The Escape Pod @ Cheat Lake",
      "status": "needs_verification",
      "platform": "vrbo",
      "listing_id": "3786507",
      "url": "https://www.vrbo.com/3786507",
      "type": "whole-house",
      "area_id": "cheat-lake",
      "neighborhood_id": null,
      "location": {
        "address": null,
        "lat": null,
        "lng": null,
        "geocoded": false
      },
      "specs": {
        "bedrooms": null,
        "bathrooms": null,
        "sleeps": null,
        "sq_ft": null
      },
      "kitchen": {
        "quality": null,
        "notes": null
      },
      "amenities": [
        "hot-tub-private"
      ],
      "pricing": {
        "currency": "USD",
        "advertised_nightly_avg": null,
        "estimated_total_3_nights": null,
        "fees_estimate": null,
        "quoted_for_trip_dates": false,
        "as_of": null
      },
      "ratings": {
        "score": null,
        "review_count": null,
        "source": null
      },
      "verification": {
        "url_confirmed": true,
        "specs_confirmed": false,
        "availability_checked_for_trip": false,
        "last_checked": "2026-05-02"
      },
      "tags": [
        "lake-area",
        "hot-tub",
        "type-example"
      ],
      "discussion": [
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "intake",
          "text": "URL confirmed but bedroom count uncertain \u2014 search result described as 'smaller but heavily amenitized.' May not satisfy 3 BR requirement. Keeping as a reference point for the lake-area amenity profile until verified."
        }
      ],
      "scores": {
        "_doc": "Derived from raw fields per scoring.properties.formulas. Regenerate when raw data changes.",
        "spec_fit": 2.0,
        "kitchen": 2.5,
        "amenities": 1,
        "value": 3,
        "confidence": 1.5,
        "overall": 2.08
      },
      "availability": {
        "status": "unknown",
        "as_of": null,
        "checked_via": null,
        "notes": "Not yet checked. Open listing URL with dates 2026-06-12 / 2026-06-15."
      }
    },
    {
      "id": "homestead-coopers-rock",
      "name": "The Homestead (near Cooper's Rock)",
      "status": "needs_verification",
      "platform": null,
      "listing_id": null,
      "url": null,
      "type": "whole-house",
      "area_id": "coopers-rock",
      "neighborhood_id": null,
      "location": {
        "address": null,
        "lat": null,
        "lng": null,
        "geocoded": false
      },
      "specs": {
        "bedrooms": 3,
        "bathrooms": 2,
        "sleeps": 6,
        "sq_ft": null,
        "beds_config": "1 queen + 2 doubles"
      },
      "kitchen": {
        "quality": null,
        "notes": null
      },
      "amenities": [],
      "pricing": {
        "currency": "USD",
        "advertised_nightly_avg": null,
        "estimated_total_3_nights": null,
        "fees_estimate": null,
        "quoted_for_trip_dates": false,
        "as_of": null
      },
      "ratings": {
        "score": null,
        "review_count": null,
        "source": null
      },
      "verification": {
        "url_confirmed": false,
        "specs_confirmed": false,
        "availability_checked_for_trip": false,
        "last_checked": "2026-05-02"
      },
      "tags": [
        "whole-house",
        "near-state-forest",
        "type-example"
      ],
      "discussion": [
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "intake",
          "text": "The most directly fitted 3 BR option in the Cooper's Rock corridor I could surface. Platform and URL not pinned \u2014 may be on Airbnb, VRBO, or a direct operator site. Specs (3 BR / 2 BA / sleeps 6 / queen + 2 doubles) came from a tertiary search source and need primary confirmation."
        }
      ],
      "scores": {
        "_doc": "Derived from raw fields per scoring.properties.formulas. Regenerate when raw data changes.",
        "spec_fit": 4.0,
        "kitchen": 2.5,
        "amenities": 0,
        "value": 3,
        "confidence": 0,
        "overall": 2.3
      },
      "availability": {
        "status": "unknown",
        "as_of": null,
        "checked_via": null,
        "notes": "Not yet checked. Open listing URL with dates 2026-06-12 / 2026-06-15."
      }
    },
    {
      "id": "coopers-rock-retreat",
      "name": "Coopers Rock Retreat",
      "status": "needs_verification",
      "platform": "airbnb",
      "listing_id": "39004635",
      "url": "https://www.airbnb.com/rooms/39004635",
      "type": "apartment",
      "area_id": "coopers-rock",
      "neighborhood_id": null,
      "location": {
        "address": null,
        "lat": null,
        "lng": null,
        "geocoded": false
      },
      "specs": {
        "bedrooms": null,
        "bathrooms": null,
        "sleeps": null,
        "sq_ft": null
      },
      "kitchen": {
        "quality": null,
        "notes": null
      },
      "amenities": [],
      "pricing": {
        "currency": "USD",
        "advertised_nightly_avg": null,
        "estimated_total_3_nights": null,
        "fees_estimate": null,
        "quoted_for_trip_dates": false,
        "as_of": null
      },
      "ratings": {
        "score": null,
        "review_count": null,
        "source": null
      },
      "verification": {
        "url_confirmed": true,
        "specs_confirmed": false,
        "availability_checked_for_trip": false,
        "last_checked": "2026-05-02"
      },
      "tags": [
        "state-forest-area",
        "type-example"
      ],
      "discussion": [
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "concern",
          "text": "Listed as apartment-style on Bruceton Mills page \u2014 may not satisfy 3 BR requirement. URL confirmed but specs need primary verification before this stays on the candidate list."
        }
      ],
      "scores": {
        "_doc": "Derived from raw fields per scoring.properties.formulas. Regenerate when raw data changes.",
        "spec_fit": 2.0,
        "kitchen": 2.5,
        "amenities": 0,
        "value": 3,
        "confidence": 1.5,
        "overall": 1.93
      },
      "availability": {
        "status": "unknown",
        "as_of": null,
        "checked_via": null,
        "notes": "Not yet checked. Open listing URL with dates 2026-06-12 / 2026-06-15."
      }
    },
    {
      "id": "mountain-creek-cabins",
      "name": "Mountain Creek Cabins (operator)",
      "status": "needs_verification",
      "platform": "direct",
      "listing_id": null,
      "url": "https://mountaincreekcabins.com/",
      "type": "operator",
      "area_id": "coopers-rock",
      "neighborhood_id": null,
      "location": {
        "address": "678 Cougar Ln, Bruceton Mills, WV",
        "lat": null,
        "lng": null,
        "geocoded": false
      },
      "specs": {
        "bedrooms": null,
        "bathrooms": null,
        "sleeps_per_cabin_max": 4,
        "sq_ft": null
      },
      "kitchen": {
        "quality": "good",
        "notes": "All cabins have fully equipped kitchens per operator description"
      },
      "amenities": [
        "hot-tub",
        "fireplace",
        "porch",
        "fully-equipped-kitchen"
      ],
      "pricing": {
        "currency": "USD",
        "advertised_nightly_avg": null,
        "estimated_total_3_nights": null,
        "fees_estimate": null,
        "quoted_for_trip_dates": false,
        "as_of": null
      },
      "ratings": {
        "score": null,
        "review_count": null,
        "source": null
      },
      "phone": "(304) 379-7548",
      "verification": {
        "url_confirmed": true,
        "specs_confirmed": true,
        "availability_checked_for_trip": false,
        "last_checked": "2026-05-02"
      },
      "tags": [
        "operator",
        "log-cabin",
        "hot-tub",
        "needs-phone-call"
      ],
      "discussion": [
        {
          "ts": "2026-05-02",
          "by": "claude",
          "type": "concern",
          "text": "Eight luxury log cabins, but each sleeps up to 4 \u2014 doesn't satisfy '3 separate bedrooms in one rental.' Two paths if we want this experience: (a) book two adjacent cabins, losing the shared-living-space benefit; or (b) call the operator to ask whether they have a larger property not on the public listing. Worth a phone call regardless."
        }
      ],
      "scores": {
        "_doc": "Derived from raw fields per scoring.properties.formulas. Regenerate when raw data changes.",
        "spec_fit": 2.0,
        "kitchen": 4,
        "amenities": 3,
        "value": 3,
        "confidence": 3.0,
        "overall": 2.9
      },
      "availability": {
        "status": "unknown",
        "as_of": null,
        "checked_via": null,
        "notes": "Not yet checked. Open listing URL with dates 2026-06-12 / 2026-06-15."
      }
    }
  ],
  "decisions": [],
  "shortlist": [],
  "open_questions": [
    {
      "ts": "2026-05-02",
      "question": "Walk-to-dinner weekend or kitchen-and-porch weekend?",
      "rationale": "Decided per the rental survey: this single axis narrows the search faster than any budget filter. In-town walkable vs. Suncrest/Cheat Lake split flows directly from this answer.",
      "status": "open"
    },
    {
      "ts": "2026-05-02",
      "question": "Single bathroom for three adults \u2014 acceptable or hard no?",
      "rationale": "Several in-town historic 3 BRs are 3 BR / 1 BA. If one bath is acceptable, the in-town candidate pool roughly doubles.",
      "status": "open"
    },
    {
      "ts": "2026-05-02",
      "question": "Are we open to Cooper's Rock-class retreats given the 3 BR sourcing difficulty?",
      "rationale": "Most of that bucket is 2 BR cabins. If we want a true forest retreat, we may need to widen to 'sleeping 6 with sleeper sofa' or book two adjacent cabins.",
      "status": "open"
    },
    {
      "ts": "2026-05-02",
      "question": "Going forward: only promote properties past needs_verification once availability is confirmed for June 12-15.",
      "rationale": "Range-establishing samples remain useful even when unavailable; real candidates must be available on the trip dates.",
      "status": "open"
    }
  ],
  "scoring": {
    "_doc": "Weights and formulas for aggregated 'overall' scores. Edit weights to retune; subscores are derived from raw fields per the formulas below. Map and any future comparison tool should both consume from here.",
    "neighborhoods": {
      "_doc": "Each neighborhood has price (lower=better) and three 1-5 attributes (higher=better). Goodness is normalized to 0-5; overall = sum(goodness * weight).",
      "weights": {
        "price": 0.25,
        "walk": 0.3,
        "quiet": 0.25,
        "historic": 0.2
      },
      "directions": {
        "price": "desc",
        "walk": "asc",
        "quiet": "asc",
        "historic": "asc"
      }
    },
    "properties": {
      "_doc": "Five derived dimensions, each on a 0-5 scale; overall = sum(dim * weight).",
      "weights": {
        "spec_fit": 0.3,
        "kitchen": 0.2,
        "amenities": 0.15,
        "value": 0.2,
        "confidence": 0.15
      },
      "formulas": {
        "spec_fit": "Mean of bedroom_score (3=3, 4=4, 5+=5, missing=2), bathroom_score (1=2, 1.5=3, 2=4, 2.5+=5, missing=2), sleeps_score (>=6=5, 5=4, 4=3, <=3 or missing=2)",
        "kitchen": "excellent=5, good=4, basic=2, missing=2.5",
        "amenities": "Count of high-value amenities present, capped at 5: hot-tub, fireplace, deck, grill, balcony, two-living-rooms, central-ac, parking, porch",
        "value": "Piecewise from price vs market_context: <=$85=5, $86-125=4.5, $126-160=4, $161-200=3, $201-250=2.5, $251-300=2, >$300=1.5, missing=3 (median assumption)",
        "confidence": "url_confirmed * 1.5 + specs_confirmed * 1.5 + availability_checked * 0.5 + min(1.5, log10(review_count+1) * 0.5); cap at 5"
      }
    }
  }
};
