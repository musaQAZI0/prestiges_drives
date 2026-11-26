import type { ReactNode } from 'react';

type BadgeProps = { children: ReactNode; variant?: 'collection' | 'vehicle' };

export default function Badge({ children, variant = 'collection' }: BadgeProps) {
  return <span className={`premiumBadge premiumBadge--${variant}`}>
    <span className="premiumBadgeIcon" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" focusable="false">
        {variant === 'vehicle' ? <><path d="m5 10 2-5h10l2 5M4 10h16v8H4zM7 14h1m8 0h1M6 18v2m12-2v2" /></> : <><path d="m12 3 8 9-8 9-8-9zM4 12h16M12 3l3 9-3 9-3-9z" /></>}
      </svg>
    </span>
    <span className="premiumBadgeLabel">{children}</span>
  </span>;
}
