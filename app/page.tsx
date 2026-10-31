import ExperienceSection from '@/components/ExperienceSection';
import HeroBanner from '@/components/HeroBanner';
import SearchModule from '@/components/SearchModule';
import HomeCollection from '@/components/HomeCollection';
import HomeServices from '@/components/HomeServices';
import Link from 'next/link';

export default function HomePage() {
  return <>
    <HeroBanner eyebrow="PRESTIGE DRIVES / PAKISTAN" title={<>Drive Your<br /><em>Next Experience</em></>} subtitle="Explore our vehicle range and enquire for your next journey. From business travel to special occasions, tell us where you’re going." image="/assets/heroes/home-hero-natural-v2.png" primaryLabel="Explore Our Fleet" secondaryLabel="Get a quote" home />
    <div className="container searchOverlap"><SearchModule /></div>
    <HomeCollection />
    <ExperienceSection><div className="container editorialGrid"><div><span className="eyebrow">The experience</span><h2>Every journey starts with a conversation.</h2><p>Tell us your destination, dates, and preferred car. We’ll use those details to discuss the right arrangement for your trip.</p><Link href="/contact" className="btn btnGoldOutline">Start an enquiry ↗</Link></div><div className="editorialSteps"><div><span>01</span><h3>Choose your vehicle</h3><p>Explore the SUV and sedan collection, or ask for a recommendation.</p></div><div><span>02</span><h3>Share your plans</h3><p>Let us know the route, date, and any preferences.</p></div><div><span>03</span><h3>Confirm the details</h3><p>Availability, pricing, and terms are discussed before booking.</p></div></div></div></ExperienceSection>
    <HomeServices />
    <ExperienceSection className="closingCta" image="/assets/heroes/contact-hero.png"><div className="container"><span className="eyebrow">YOUR NEXT JOURNEY</span><h2>Let’s make it memorable.</h2><Link href="/contact" className="btn btnPrimary">Get a quote →</Link></div></ExperienceSection>
  </>;
}
