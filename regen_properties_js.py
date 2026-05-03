#!/usr/bin/env python3
"""
Regenerate properties.js from properties.json.

The HTML pages (morgantown_map.html, compare.html) preferentially load the JSON
via fetch() when served over HTTP, but fetch() is blocked under file://. The
shim file (properties.js) is loaded via <script src="properties.js"> which
works in both contexts.

Run this whenever you hand-edit properties.json. (Claude regenerates it
automatically after its own edits.)
"""
import json
import pathlib

ROOT = pathlib.Path(__file__).parent
src = ROOT / "properties.json"
dst = ROOT / "properties.js"

raw = src.read_text(encoding="utf-8")
# Validate it's parseable JSON before wrapping
json.loads(raw)

shim = (
    "// AUTO-GENERATED from properties.json. Do not hand-edit.\n"
    "// Regenerate by running: python regen_properties_js.py\n"
    "// (or ask Claude to refresh it after a JSON change).\n"
    "window.PROPERTIES_DATA = " + raw.rstrip() + ";\n"
)
dst.write_text(shim, encoding="utf-8")
print(f"Wrote {dst.name} ({len(shim):,} bytes)")
