'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import Image from 'next/image';

export default function ExperienceSection({ children, image = '/assets/backgrounds/experience-drive.jpg', className = 'section darkEditorial' }: { children: ReactNode; image?: string; className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const backdrop = imageRef.current;
    if (!section || !backdrop) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const draw = () => {
      frame = 0;
      if (motion.matches) {
        backdrop.style.transform = 'translate3d(0, 0, 0)';
        return;
      }
      const { top, height, bottom } = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      if (bottom < 0 || top > viewport) return;
      const progress = Math.max(-1, Math.min(1, (viewport - 2 * top - height) / (viewport + height)));
      const travel = Math.min(100, height * 0.15);
      backdrop.style.transform = `translate3d(0, ${progress * travel}px, 0)`;
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(draw);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    motion.addEventListener('change', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      motion.removeEventListener('change', schedule);
    };
  }, []);

  return <section ref={sectionRef} className={`${className} experienceSection`}>
    <div ref={imageRef} className="experienceBackdrop" aria-hidden="true">
      <Image src={image} alt="" fill sizes="100vw" />
    </div>
    <div className="experienceShade" aria-hidden="true" />
    {children}
  </section>;
}
