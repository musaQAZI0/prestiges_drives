# Homepage hero stock photography

Downloaded from Pexels on 2026-11-15. These are stock photographs, not images of Prestige Drives' own vehicles or locations.

| File | Photographer | Source |
| --- | --- | --- |
| land-cruiser.jpg | Safi Erneste | https://www.pexels.com/photo/parked-toyota-land-cruiser-18029607/ |
| prado-desert.jpg | Irfan Rahat | https://www.pexels.com/photo/photograph-of-a-toyota-car-11114270/ |
| lc200-mountain.jpg | Ruslan Ataev | https://www.pexels.com/photo/black-toyota-land-cruiser-prado-on-road-19758141/ |

Fleet match: `toyota-lc-200` and `toyota-prado-tx` / `toyota-prado-txl` in `lib/data.ts`. The mountain photo's source title says Prado, but the photographed vehicle is visually a Land Cruiser 200 (including the LAND CRUISER rear badge); it is labelled accordingly in the slideshow. Stock photography represents model families, not a guarantee of a particular trim or an actual rental unit.

License: https://www.pexels.com/license/

Original downloads are retained here. Optimized WebP versions are in `public/assets/optimized/heroes/stock/`. Run `node optimize-images.mjs` to regenerate them through the existing image pipeline. Crops are controlled per slide in `components/HeroSlideshow.tsx`; the photographs have not been AI generated or extended.
