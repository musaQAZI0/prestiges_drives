import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import HeroSlideshow from './HeroSlideshow';

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
    <section className={`hero ${compact ? 'heroCompact' : ''} ${home ? 'heroHome' : ''}`}>
      {!home && <div className="heroDesktopVisual" aria-hidden="true"><Image src={image} alt="" fill priority sizes="100vw" /><div className="heroDesktopShade" /></div>}
      <div className="container heroContent">
        <div className="heroCopy">
        <div className="heroCopy">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{home ? <><span className="heroDesktopCopy">{title}</span><span className="heroMobileCopy">Your Journey.<br /><em>Your Drive.</em></span></> : title}</h1>
        <p>{home ? <><span className="heroDesktopCopy">{subtitle}</span><span className="heroMobileCopy">Premium SUVs and sedans for every occasion.</span></> : subtitle}</p>
        </div>
        </div>
        <div className="heroActions">
          <Link href={primaryHref} className="btn btnPrimary">{primaryLabel} <span aria-hidden="true">→</span></Link>
          <Link href={secondaryHref} className="btn btnGhost">{secondaryLabel} <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      {home ? <HeroSlideshow /> : <div className="heroMobileVisual" aria-hidden="true"><Image src={image} alt="" fill priority sizes="100vw" /></div>}
      {home && <div className="container heroHighlights" aria-label="Explore Prestige Drives"><div className="heroDesktopHighlights"><span>Explore SUVs &amp; sedans</span><span>Plan your journey</span><span>Get a quote</span></div><div className="heroMobileCopy">SUVs &amp; sedans <span aria-hidden="true">·</span> Business &amp; leisure</div></div>}
    </section>
  );
}
