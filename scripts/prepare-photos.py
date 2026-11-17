from pathlib import Path
from PIL import Image

assets = Path(r"C:\Users\10552\.cursor\projects\e-jlk\assets")
bike = assets / "c__Users_10552_AppData_Roaming_Cursor_User_workspaceStorage_f0ce6ef94035e65f176adb903605bcad_images_86e7f88f1175347038bf49e61719e3b9-3533e246-b459-469c-9d91-f38ea27c08ec.jpg"
gown = assets / "c__Users_10552_AppData_Roaming_Cursor_User_workspaceStorage_f0ce6ef94035e65f176adb903605bcad_images_b00f8ce1dc4bfe36bb616f437cd66d47-afabef48-6bad-40c5-8f1a-467068172d78.txt"

# gown is jpg
gown = assets / "c__Users_10552_AppData_Roaming_Cursor_User_workspaceStorage_f0ce6ef94035e65f176adb903605bcad_images_b00f8ce1dc4bfe36bb616f437cd66d47-afabef48-6bad-40c5-8f1a-467068172d78.jpg"

def save(src: Path, dest: Path, max_w: int = 1400) -> None:
    im = Image.open(src).convert("RGB")
    if im.width > max_w:
        h = int(im.height * max_w / im.width)
        im = im.resize((max_w, h), Image.Resampling.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "JPEG", quality=86, optimize=True, progressive=True)
    print(dest, dest.stat().st_size, im.size)

root = Path(r"e:\jlk")
for app in ("me", "yisuan"):
    save(bike, root / "apps" / app / "public" / "images" / "likai-jiang.jpg")
save(gown, root / "apps" / "me" / "public" / "images" / "likai-jiang-academic.jpg")
