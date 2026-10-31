import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

interface HeroBannerProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  image: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  compact?: boolean;
  home?: boolean;
}

export default function HeroBanner({
  eyebrow,
  title,
  subtitle,
  image,
  primaryLabel = 'Explore Fleet',
  primaryHref = '/fleet',
  secondaryLabel = 'Get a quote',
  secondaryHref = '/contact',
  compact = false,
  home = false
}: HeroBannerProps) {
  return (
    <section className={`hero ${compact ? 'heroCompact' : ''} ${home ? 'heroHome' : ''}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(5,5,8,0.92) 0%, rgba(5,5,8,0.78) 25%, rgba(5,5,8,0.34) 49%, rgba(5,5,8,0.04) 72%), url(${image})` }}>
      <div className="container heroContent">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="heroActions">
          <Link href={primaryHref} className="btn btnPrimary">{primaryLabel} <span aria-hidden="true">→</span></Link>
          <Link href={secondaryHref} className="btn btnGhost">{secondaryLabel} <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <div className="heroMobileVisual" aria-hidden="true"><Image src={image} alt="" fill sizes="(max-width: 600px) 100vw, 1px" /></div>
      {home && <div className="container heroHighlights" aria-label="Explore Prestige Drives"><span>Explore SUVs &amp; sedans</span><span>Plan your journey</span><span>Get a quote</span></div>}
    </section>
  );
}
