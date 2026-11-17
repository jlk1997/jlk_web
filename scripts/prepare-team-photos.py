"""Crop team portraits to 4:5 and write them into the Yisuan public folder."""
from pathlib import Path

from PIL import Image

ROOT = Path(r"e:\jlk")
ASSETS = Path(r"C:\Users\10552\.cursor\projects\e-jlk\assets")
HE = ASSETS / (
    "c__Users_10552_AppData_Roaming_Cursor_User_workspaceStorage_"
    "f0ce6ef94035e65f176adb903605bcad_images_"
    "f59bc4f7d278a37245d1e4d449db8222-3c9de4f5-c332-4fc4-90c4-129832e73833.jpg"
)
LIKAI = ROOT / "apps" / "me" / "public" / "images" / "likai-jiang-academic.jpg"
OUT = ROOT / "apps" / "yisuan" / "public" / "images"


def crop_4_5(im: Image.Image, bias: str = "center") -> Image.Image:
    """Center-crop to 4:5. bias='top' keeps the upper part when height is trimmed."""
    w, h = im.size
    target = 4 / 5
    if w / h > target:
        new_w = int(round(h * target))
        left = (w - new_w) // 2
        box = (left, 0, left + new_w, h)
    else:
        new_h = int(round(w / target))
        if bias == "top":
            top = max(0, int((h - new_h) * 0.15))
        else:
            top = (h - new_h) // 2
        if top + new_h > h:
            top = h - new_h
        box = (0, top, w, top + new_h)
    return im.crop(box)


def save(im: Image.Image, dest: Path, max_w: int = 1200) -> None:
    if im.width > max_w:
        nh = int(im.height * max_w / im.width)
        im = im.resize((max_w, nh), Image.Resampling.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "JPEG", quality=86, optimize=True, progressive=True)
    print(dest.name, im.size, dest.stat().st_size)


def main() -> None:
    he = crop_4_5(Image.open(HE).convert("RGB"), "center")
    save(he, OUT / "he-qianliang.jpg")
    # Head-and-shoulders window on the gown photo. The pointing hand stays in frame.
    gown = Image.open(LIKAI).convert("RGB")
    likai = gown.crop((104, 300, 664, 1000))
    save(likai, OUT / "team-likai.jpg")


if __name__ == "__main__":
    main()
