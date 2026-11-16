'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  { src: '/assets/optimized/heroes/stock/land-cruiser.webp', label: 'Toyota Land Cruiser LC 200 on a cobblestone driveway', position: '50% 55%' },
  { src: '/assets/optimized/heroes/stock/prado-desert.webp', label: 'Toyota Prado in a rugged desert landscape', position: '50% 58%' },
  { src: '/assets/optimized/heroes/stock/lc200-mountain.webp', label: 'Toyota Land Cruiser LC 200 on a mountain road', position: '65% 55%' },
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
        {slides.map((slide, index) => (
          <div key={slide.src} className={`heroSlide ${index === active ? 'isActive' : ''}`}>
            {(index === 0 || ready || index === active) && <Image src={slide.src} alt="" fill priority={index === 0} loading={index === 0 ? undefined : 'eager'} sizes="100vw" style={{ objectPosition: slide.position }} />}
          </div>
        ))}
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
