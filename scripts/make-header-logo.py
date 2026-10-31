"""Make a transparent, header-ready copy of the supplied Prestige Drives artwork."""
from pathlib import Path
import numpy as np
from PIL import Image

root = Path(__file__).resolve().parents[1]
source = root / 'public/assets/logo/prestige-drives-logo.jpg'
target = root / 'public/assets/logo/prestige-drives-logo-header.png'

image = Image.open(source).convert('RGB').crop((105, 420, 1155, 890))
pixels = np.asarray(image, dtype=np.float32)
red, green, blue = pixels[..., 0], pixels[..., 1], pixels[..., 2]

# Clear the faint JPEG background noise and keep soft artwork edges.
ink = 255 - np.minimum(np.minimum(red, green), blue)
alpha = np.clip((ink - 7) / 36, 0, 1)
alpha = alpha * alpha * (3 - 2 * alpha)

# Recolor only the black strokes for a dark header. Preserve the gold shapes.
gold_mix = np.clip((red - blue - 8) / 24, 0, 1)
gold_mix = gold_mix * gold_mix * (3 - 2 * gold_mix)
gold_light = np.clip((red - 135) / 95, 0, 1)[..., None]
gold = np.array([161, 111, 46]) + gold_light * np.array([69, 83, 86])
ivory = np.array([247, 241, 230])
color = ivory * (1 - gold_mix[..., None]) + gold * gold_mix[..., None]
rgba = np.dstack((color, alpha[..., None] * 255)).clip(0, 255).astype('uint8')
Image.fromarray(rgba, 'RGBA').save(target, optimize=True)
print(target)
