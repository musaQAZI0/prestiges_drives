'use client';

import { getImageProps } from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  { desktop: '/assets/optimized/heroes/prestige-silver-red-black-v1.webp', mobile: '/assets/optimized/heroes/prestige-silver-red-black-mobile-v2.webp', label: 'Lexus, Land Cruiser and Civic' },
  { desktop: '/assets/optimized/heroes/prestige-silver-red-suv-v1.webp', mobile: '/assets/optimized/heroes/prestige-silver-red-suv-mobile-v1.webp', label: 'Prado and Fortuner' },
  { desktop: '/assets/optimized/heroes/prestige-silver-red-city-v1.webp', mobile: '/assets/optimized/heroes/prestige-silver-red-city-mobile-v1.webp', label: 'Civic and Sportage' },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([false, false, false]);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setReducedMotion(preference.matches);
    const syncVisibility = () => setVisible(!document.hidden);
    syncMotion();
    syncVisibility();
    preference.addEventListener('change', syncMotion);
    document.addEventListener('visibilitychange', syncVisibility);
    return () => {
      preference.removeEventListener('change', syncMotion);
      document.removeEventListener('visibilitychange', syncVisibility);
    };
  }, []);

  useEffect(() => {
    if (!visible || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive(current => loaded[(current + 1) % slides.length] ? (current + 1) % slides.length : current);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [active, visible, reducedMotion, loaded]);

  const selectSlide = (index: number) => {
    setActive(index);
  };

  return <div className="heroSlideshow" role="region" aria-roledescription="carousel" aria-label="Prestige Drives fleet highlights">
    <div className="heroSlideImages" aria-hidden="true">{slides.map((slide, index) => {
      const { props } = getImageProps({ src: slide.desktop, alt: '', fill: true, priority: index === 0, loading: 'eager', sizes: '100vw' });
      return <div className={'heroSlide' + (index === active ? ' isActive' : '')} key={slide.desktop}>
        <picture><source media="(max-width: 800px)" srcSet={slide.mobile} /><img {...props} alt="" fetchPriority={index === 0 ? 'high' : 'low'} onLoad={() => setLoaded(current => current.map((value, position) => position === index ? true : value))} /></picture>
      </div>;
    })}</div>
    <div className="heroSlideControls">
      <div className="heroSlideDots" role="group" aria-label="Choose a hero image">{slides.map((slide, index) =>
        <button key={slide.desktop} type="button" aria-label={'Show image ' + (index + 1) + ': ' + slide.label} aria-pressed={active === index} onClick={() => selectSlide(index)}><span /></button>
      )}</div>
    </div>
  </div>;
}
