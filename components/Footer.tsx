import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return <footer className="footer"><div className="container footerGrid">
    <div className="footerIntro"><Link href="/" className="footerLogo"><Image src="/assets/optimized/logo/prestige-drives-logo-header.webp" alt="Prestige Drives" width={230} height={103} sizes="230px" /></Link><p>Considered journeys begin with the right car. Explore the fleet and tell us what you have in mind.</p></div>
    <div><h4>Explore</h4><ul><li><Link href="/fleet">The fleet</Link></li><li><Link href="/services">Services</Link></li><li><Link href="/about">Our approach</Link></li><li><Link href="/contact">Enquire</Link></li></ul></div>
    <div><h4>Plan your journey</h4><p>Share your dates, route, and preferred car. Let us help plan your journey.</p><Link className="footerEnquire" href="/contact">Start an enquiry ↗</Link></div>
  </div><div className="container footerBottom"><span>© {new Date().getFullYear()} Prestige Drives</span><span>Elegance in motion.</span></div></footer>;
}
