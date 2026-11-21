'use client';

import { getImageProps } from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  { src: '/assets/optimized/heroes/home-original-hotel.webp', mobileSrc: '/assets/optimized/heroes/home-mobile-hotel.webp', label: 'Luxury arrival in Islamabad' },
  { src: '/assets/optimized/heroes/home-original-mountains.webp', mobileSrc: '/assets/optimized/heroes/home-mobile-mountains.webp', label: 'Discover the northern mountains' },
  { src: '/assets/optimized/heroes/home-original-city.webp', mobileSrc: '/assets/optimized/heroes/home-mobile-city.webp', label: 'An executive journey through the city' },
];

export default function HeroSlideshow() {
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

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
    if (reducedMotion || !visible) return;
    const timer = window.setInterval(() => setActive(index => (index + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [reducedMotion, visible, active]);

  return (
    <div className="heroSlideshow" role="group" aria-label="Featured journeys">
      <div className="heroSlideImages" aria-hidden="true">
        {slides.map((slide, index) => {
          const { props: desktop } = getImageProps({ src: slide.src, alt: '', fill: true, sizes: '100vw' });
          const { props: mobile } = getImageProps({ src: slide.mobileSrc, alt: '', width: 1080, height: 1920, sizes: '100vw' });
          return <div key={slide.src} className={`heroSlide ${index === active ? 'isActive' : ''}`}>
            {(index === 0 || ready || index === active) && <picture>
              <source media="(max-width: 800px) and (orientation: portrait)" srcSet={mobile.srcSet} sizes={mobile.sizes} />
              <img {...desktop} alt="" loading="eager" fetchPriority={index === 0 ? 'high' : 'low'} />
            </picture>}
          </div>;
        })}
      </div>
      <div className="heroSlideControls">
        <div className="heroSlideDots" role="group" aria-label="Choose a hero image">
          {slides.map((slide, index) => (
            <button key={slide.src} type="button" aria-label={`Show image ${index + 1}: ${slide.label}`} aria-pressed={index === active} onClick={() => setActive(index)}><span /></button>
          ))}
        </div>
      </div>
    </div>
  );
}
