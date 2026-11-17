import os
import cv2
from PIL import Image
import numpy as np

base = r"C:\Users\10552\.cursor\projects\e-jlk\assets"
out = r"e:\jlk\.tmp-ocr"
os.makedirs(out, exist_ok=True)
det = cv2.QRCodeDetector()

def try_decode(path, tag):
    im = cv2.imread(path)
    if im is None:
        print(tag, "missing")
        return
    for name, arr in [("bgr", im), ("gray", cv2.cvtColor(im, cv2.COLOR_BGR2GRAY))]:
        data, pts, _ = det.detectAndDecode(arr if name == "bgr" else cv2.cvtColor(arr, cv2.COLOR_GRAY2BGR) if arr.ndim == 2 else arr)
        print(tag, name, repr(data), bool(pts is not None and len(data)))

weichong = os.path.join(base, "c__Users_10552_AppData_Roaming_Cursor_User_workspaceStorage_f0ce6ef94035e65f176adb903605bcad_images_0c04910d42bc902053e2896cfca72e30-c9b0b9fc-40d9-4491-a9f6-01b1b14f7596.jpg")
yisuan = os.path.join(base, "c__Users_10552_AppData_Roaming_Cursor_User_workspaceStorage_f0ce6ef94035e65f176adb903605bcad_images____________-d43fd24e-5a5b-4281-8c43-e221ffe874bc.jpg")

wc = Image.open(weichong)
w, h = wc.size
qr = wc.crop((int(w * 0.74), int(h * 0.10), int(w * 0.96), int(h * 0.40)))
qr_path = os.path.join(out, "weichong-qr2.jpg")
qr.save(qr_path, quality=98)
try_decode(qr_path, "weichong-qr")
try_decode(weichong, "weichong-full")

ys = Image.open(yisuan).rotate(90, expand=True)
yw, yh = ys.size
# QR is usually bottom-right on an upright license
for name, box in {
    "br": (0.78, 0.08, 0.97, 0.38),
    "tr": (0.78, 0.62, 0.97, 0.92),
}.items():
    crop = ys.crop((int(yw * box[0]), int(yh * box[1]), int(yw * box[2]), int(yh * box[3])))
    p = os.path.join(out, f"yisuan-{name}.jpg")
    crop.save(p, quality=98)
    try_decode(p, "yisuan-" + name)
