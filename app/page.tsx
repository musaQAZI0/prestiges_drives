import ExperienceSection from '@/components/ExperienceSection';
import HeroBanner from '@/components/HeroBanner';
import SearchModule from '@/components/SearchModule';
import SectionHeading from '@/components/SectionHeading';
import VehicleCard from '@/components/VehicleCard';
import { featuredVehicles } from '@/lib/data';
import Link from 'next/link';

export default function HomePage() {
  return <>
    <HeroBanner title={<>Drive Your<br /><em>Next Experience</em></>} subtitle="Explore our vehicle range and enquire for your next journey. From business travel to special occasions, tell us where you’re going." image="/assets/heroes/home-hero.png" primaryLabel="Explore Our Fleet" secondaryLabel="Make an Enquiry" home />
    <div className="container searchOverlap"><SearchModule /></div>
    <section className="section fleetSection"><div className="container"><div className="sectionTop"><SectionHeading eyebrow="The collection" title="A car for every occasion." text="Explore our collection of SUVs and sedans. We’ll confirm availability and details for your journey." /><Link href="/fleet" className="textLink">View full fleet ↗</Link></div><div className="vehicleGrid">{featuredVehicles.slice(0, 3).map(vehicle => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}</div></div></section>
    <ExperienceSection><div className="container editorialGrid"><div><span className="eyebrow">The experience</span><h2>Every journey starts with a conversation.</h2><p>Tell us your destination, dates, and preferred car. We’ll use those details to discuss the right arrangement for your trip.</p><Link href="/contact" className="btn btnGoldOutline">Start an enquiry ↗</Link></div><div className="editorialSteps"><div><span>01</span><h3>Choose your vehicle</h3><p>Browse SUVs and sedans from the supplied fleet collection.</p></div><div><span>02</span><h3>Share your plans</h3><p>Let us know the route, date, and any preferences.</p></div><div><span>03</span><h3>Confirm the details</h3><p>Availability, pricing, and terms are discussed before booking.</p></div></div></div></ExperienceSection>
    <section className="section ivorySection"><div className="container"><SectionHeading eyebrow="Travel, considered" title="For the moments that matter." text="Whether you are planning a transfer, a business journey, or an event, start with a tailored enquiry." /><div className="serviceGrid"><Link href="/services" className="serviceTile"><span>01 / Transfers</span><h3>Airport &amp; city travel</h3><p>Share your pickup and destination for a tailored quote.</p><b>Explore service ↗</b></Link><Link href="/services" className="serviceTile"><span>02 / Business</span><h3>Corporate journeys</h3><p>Discuss transport needs for a meeting or guest itinerary.</p><b>Explore service ↗</b></Link><Link href="/services" className="serviceTile"><span>03 / Occasions</span><h3>Events &amp; weddings</h3><p>Enquire about a vehicle for your special date.</p><b>Explore service ↗</b></Link></div></div></section>
    <ExperienceSection className="closingCta" image="/assets/heroes/contact-hero.png"><div className="container"><span className="eyebrow">YOUR NEXT JOURNEY</span><h2>Let’s make it memorable.</h2><Link href="/contact" className="btn btnPrimary">Ask for a quotation →</Link></div></ExperienceSection>
  </>;
}
