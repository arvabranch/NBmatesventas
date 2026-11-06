"""Convierte las imágenes extraídas (assets/img/raw) a WebP livianas con el id del producto.

Uso: python3 tools/extract_pdf.py && python3 tools/build_images.py
"""
import pathlib
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
RAW = ROOT / "assets" / "img" / "raw"
OUT = ROOT / "assets" / "img" / "products"
OUT.mkdir(parents=True, exist_ok=True)

# id de producto -> página del catálogo PDF (o archivo raw)
SOURCES = {
    "waka-stick": 2, "waka-solo-2": 3, "waka-smash-air": 4, "waka-nova": 5,
    "waka-blast": 6, "hqd-cuvie-air": 7, "fume-recharger": 8, "death-row-5k": 9,
    "lost-mary-os5000": 10, "ignite-5000": 11, "lost-mary-mo5000": 12, "death-row-7k": 13,
    "tyson-7k": 14, "chillax-go-kit": 15, "chillax-go-bateria": 15, "chillax-go-capsula": 15,
    "nola-bar-10000": 16, "ijoy-bar-sd10000": 17, "nicky-jam-10000": 18, "north-ft12000": 19,
    "beyond-12000": 20, "mtrx-12000": 21, "chris-brown": 22, "baddy-bar-15000": 23,
    "nicky-jam-15000": 24, "priv-bar-turbo": 25, "bugatti-spaceship": 26, "elux-cyberover": 27,
    "spaceman-18000": 28, "spaceman-20000": 29, "vookbar-cyber": 30, "airfuze-jet": 31,
    "humo-azul": 32, "starbuzz-15k": 33, "vera-vr22000": 34, "clase-azul": 35,
    "snoopy-smoke-pro": 36, "kylin-bar-30000": 37, "hookalit": 38, "equator-eq30000": 39,
    "tomoro-d15": 40, "airfuze-smart": 41, "extra-bar-turbo": 42, "nexa-pix": 43,
    "solo-bar-mate-kit": 44, "solo-bar-30-kit": 45, "nimmbox-flux": 46, "elfbar-ebcreate": 47,
    "shot-caller": 48, "rifbar-mix-pro": 49, "dojo-sphere-s": 52, "dojo-sphere-x": 53,
    "solo-bar-defender": 61, "dummy-50k": 50, "dummy-capsula": 51, "nimmbox-mecha": 54,
    "spaceman-50k": 55, "reignbar": 56, "upends": 57, "lost-angel": 58,
    "lost-angel-capsula": 59, "bang-leader": 60, "hello-synix": 62, "craftbox-v-play": 63,
    "ulit-shellet-plus": 64, "ulit-shellet-capsula": 65, "dinner-lady-galax": 66, "binaries-sv15000": 68,
    "extra-3k": 69, "life-pod-eco-2": 70, "life-pod-sk": 67, "stlth-loop-5k-kit": 71,
    "stlth-loop-2-bateria": 72, "stlth-loop-bateria": 73, "stlth-pod-loop-5k": 74, "stlth-pod-vice-5k": 75,
    "stlth-pod-9k": 76, "stlth-pod-switch-15k": 77, "stlth-open": 78, "vaporesso-gtx-go-40": 79,
    "vaporesso-xros": 80, "vaporesso-xros-2": 81, "vaporesso-xtra": 82, "vaporesso-luxe-x-pro": 83,
    "vaporesso-sky-solo": 84, "vaporesso-sky-solo-plus": 85, "smok-rpm-5": 86, "voopoo-vinci-q": 87,
    # tomoro-t1 ya no está en el catálogo nuevo: se conserva su imagen anterior.
}

MAX = 720

for pid, src in SOURCES.items():
    path = RAW / (src if isinstance(src, str) else f"cat-{src:02d}.png")
    img = Image.open(path).convert("RGBA")
    box = img.getchannel("A").point(lambda a: 255 if a > 8 else 0).getbbox()
    if box:
        img = img.crop(box)
    img.thumbnail((MAX, MAX), Image.LANCZOS)
    img.save(OUT / f"{pid}.webp", "WEBP", quality=82, method=6)

print(len(SOURCES), "imágenes en", OUT)
