import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';

export default function AboutPage() {
  return <><HeroBanner eyebrow="About Prestige Drives" title="Elegance in motion." subtitle="A premium rental and mobility concept built around considered vehicles and a clear enquiry experience." image="/assets/heroes/about-hero.png" compact primaryLabel="Explore the fleet" primaryHref="/fleet" secondaryLabel="Make an enquiry" secondaryHref="/contact" /><section className="section ivorySection"><div className="container aboutGrid"><div><span className="eyebrow dark">OUR APPROACH</span><h2>Designed around the journey.</h2></div><div><p>Prestige Drives brings together a collection of SUVs and sedans for customers planning travel in Pakistan. The first step is simple: choose a vehicle and share the details of your trip.</p><p>We keep the enquiry clear, so availability, price, service area, and rental terms can be confirmed for your specific plans.</p><Link className="textLink" href="/contact">Start a conversation ↗</Link></div></div></section></>;
}
