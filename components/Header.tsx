'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';

const links = [ { href: '/', label: 'Home' }, { href: '/fleet', label: 'Fleet' }, { href: '/services', label: 'Services' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' } ];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 801px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        document.querySelector<HTMLButtonElement>('.menuToggle')?.focus();
      }
    };
    desktop.addEventListener('change', closeOnDesktop);
    if (open) document.addEventListener('keydown', closeOnEscape);
    return () => {
      desktop.removeEventListener('change', closeOnDesktop);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);
  useEffect(() => {
    setOpen(false);
    const update = () => {
      setScrolled(window.scrollY > 40);
      const remaining = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
      setAtBottom(window.scrollY > 40 && remaining <= 32);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      observer.disconnect();

    };
  }, [pathname]);
  return <header className={`siteHeader ${pathname === '/' ? 'homeHeader' : ''} ${(['/', '/services', '/about', '/fleet', '/contact'].includes(pathname) || pathname.startsWith('/fleet/')) ? 'cinematicHeader' : ''} ${scrolled ? 'isScrolled' : ''} ${open ? 'menuOpen' : ''} ${atBottom && !open ? 'isHidden' : ''} `}><div className="container navWrap">
    <Link href="/" className="brandMark" aria-label="Prestige Drives home" onClick={() => setOpen(false)}><Image src="/assets/optimized/logo/prestige-drives-silver-red-v1.webp" alt="Prestige Drives" width={180} height={81} priority sizes="205px" /></Link>
    <nav id="main-navigation" className={`siteNav ${open ? 'isOpen' : ''}`} aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} prefetch={true} aria-current={(pathname === link.href || (link.href !== '/' && pathname.startsWith(`${link.href}/`))) ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>
    <Link href="/contact" prefetch={true} className="headerCta" onClick={() => setOpen(false)}>Get a quote</Link>
    <button type="button" className="menuToggle" aria-controls="main-navigation" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => { if (!open) links.filter(link => link.href !== pathname).forEach(link => router.prefetch(link.href)); setOpen(!open); }}><span /><span /><span /></button>
  </div></header>;
}
