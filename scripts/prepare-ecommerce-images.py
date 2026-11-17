"""Crop ecommerce photos and write webp into the Yisuan public folder.

Product shots are squared. Room shots stay 4:3. No text is added.
"""
from pathlib import Path

from PIL import Image

RAW = Path(r"C:\Users\10552\.cursor\projects\e-jlk\assets")
OUT = Path(r"e:\jlk\apps\yisuan\public\images\ecommerce")

# name, source, aspect (w/h), max width
JOBS = [
    ("rug-geo.webp", "eco-rug-geo.jpg", 1, 900),
    ("rug-floral.webp", "eco-rug-floral.jpg", 1, 900),
    ("blocks.webp", "eco-blocks.jpg", 1, 900),
    ("plush.webp", "eco-plush.jpg", 1, 900),
    ("car.webp", "eco-car.jpg", 1, 900),
    ("tiles.webp", "eco-tiles.jpg", 1, 900),
    ("scene-rug.webp", "eco-scene-rug.jpg", 4 / 3, 1200),
    ("scene-toy.webp", "eco-scene-toy.jpg", 4 / 3, 1200),
]


def crop(im: Image.Image, aspect: float) -> Image.Image:
    w, h = im.size
    if w / h > aspect:
        new_w = int(round(h * aspect))
        left = (w - new_w) // 2
        box = (left, 0, left + new_w, h)
    else:
        new_h = int(round(w / aspect))
        top = (h - new_h) // 2
        box = (0, top, w, top + new_h)
    return im.crop(box)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for dest_name, src_name, aspect, max_w in JOBS:
        im = crop(Image.open(RAW / src_name).convert("RGB"), aspect)
        if im.width > max_w:
            nh = int(im.height * max_w / im.width)
            im = im.resize((max_w, nh), Image.Resampling.LANCZOS)
        dest = OUT / dest_name
        im.save(dest, "WEBP", quality=82, method=6)
        print(dest.name, im.size, dest.stat().st_size)


if __name__ == "__main__":
    main()
