import { getImageProps } from 'next/image';
export default function HeroSlideshow() {
  const { props } = getImageProps({ src: '/assets/optimized/heroes/prestige-silver-red-black-v1.webp', alt: '', fill: true, priority: true, sizes: '100vw' });
  return <div className="heroSlideshow" aria-hidden="true"><div className="heroSlideImages"><div className="heroSlide isActive">
    <picture><source media="(max-width: 800px)" srcSet="/assets/optimized/heroes/prestige-silver-red-black-mobile-v2.webp" /><img {...props} alt="" /></picture>
  </div></div></div>;
}
