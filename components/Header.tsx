'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';

const links = [ { href: '/', label: 'Home' }, { href: '/fleet', label: 'Fleet' }, { href: '/services', label: 'Services' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' } ];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atFooter, setAtFooter] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    const footer = document.querySelector('footer');
    const observer = new IntersectionObserver(([entry]) => setAtFooter(entry.isIntersecting));
    if (footer) observer.observe(footer);
    return () => {
      window.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, [pathname]);
  return <header className={`siteHeader ${scrolled ? 'isScrolled' : ''} ${open ? 'menuOpen' : ''} ${atFooter && scrolled && !open ? 'isHidden' : ''}`}><div className="container navWrap">
    <Link href="/" className="brandMark" aria-label="Prestige Drives home" onClick={() => setOpen(false)}><Image src="/assets/optimized/logo/prestige-drives-logo-header.webp" alt="Prestige Drives" width={180} height={81} priority sizes="205px" /></Link>
    <nav className={`siteNav ${open ? 'isOpen' : ''}`} aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} prefetch={true} aria-current={pathname === link.href ? 'page' : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>
    <Link href="/contact" prefetch={true} className="headerCta">Get a quote</Link>
    <button type="button" className="menuToggle" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span /><span /><span /></button>
  </div></header>;
}
