"""Wrap the supplied logo JPEG in self-contained, transparent SVG variants.

This preserves the supplied artwork exactly. It is an SVG container with an
embedded raster image and an SVG filter, not a traced/vector master logo.
"""

from base64 import b64encode
from pathlib import Path


logo_dir = Path(__file__).resolve().parents[1] / "public" / "assets" / "logo"
source = logo_dir / "prestige-drives-logo.jpg"
encoded = b64encode(source.read_bytes()).decode("ascii")

# White is removed through luminance-based alpha. The gold and black marks stay
# opaque. The header variant maps neutral black strokes to ivory while leaving
# the warm gold strokes gold. Both filters retain JPEG edge antialiasing.
variants = {
    "prestige-drives-logo-transparent.svg": (
        "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  "
        "-2.126 -7.152 -0.722 0 9.7"
    ),
    "prestige-drives-logo-header.svg": (
        "-0.45 0 0.45 0 1  -0.9 0 0.9 0 1  "
        "-1.7 0 1.7 0 1  -2.126 -7.152 -0.722 0 9.7"
    ),
}

for filename, matrix in variants.items():
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1050" height="470" viewBox="105 420 1050 470" role="img" aria-labelledby="title">
  <title id="title">Prestige Drives</title>
  <defs>
    <filter id="remove-white" x="0" y="0" width="1254" height="1254" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="{matrix}"/>
    </filter>
  </defs>
  <image x="0" y="0" width="1254" height="1254" filter="url(#remove-white)" href="data:image/jpeg;base64,{encoded}"/>
</svg>
'''
    (logo_dir / filename).write_text(svg, encoding="utf-8")
    print(logo_dir / filename)
