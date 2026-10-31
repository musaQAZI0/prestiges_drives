import HeroBanner from '@/components/HeroBanner';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  { no: '01', title: 'Airport & city transfers', image: 'airport-transfers', alt: 'Black SUV outside a warmly lit airport terminal', text: 'Tell us your arrival time, pickup point, destination, and preferred vehicle for a tailored enquiry.' },
  { no: '02', title: 'Corporate travel', image: 'corporate-travel', alt: 'Executive sedan at a modern corporate office entrance', text: 'Discuss transport for meetings, guest visits, and business itineraries.' },
  { no: '03', title: 'Events & weddings', image: 'events-weddings', alt: 'White luxury SUV with flowers at an elegant wedding venue', text: 'Enquire about a vehicle and schedule for an occasion that deserves a considered arrival.' },
  { no: '04', title: 'Private journeys', image: 'private-journeys', alt: 'Black SUV beside a scenic mountain road at sunset', text: 'Share your route and travel dates so we can discuss a suitable arrangement.' }
];

export default function ServicesPage() {
  return <>
    <HeroBanner eyebrow="What we can arrange" title="Travel on your terms." subtitle="From a simple transfer to an important occasion, start with the journey you have in mind." image="/assets/heroes/services-hero-v4.jpg" compact primaryLabel="Request a tailored quote" primaryHref="/contact" secondaryLabel="Explore services" secondaryHref="#services" />
    <section id="services" className="section ivorySection">
      <div className="container">
        <div className="sectionHeading"><span className="eyebrow dark">OUR SERVICES</span><h2>Thoughtful travel, from start to finish.</h2><p>Each request is shaped around your dates, route, vehicle preference, and requirements.</p></div>
        <div className="serviceGrid twoByTwo">
          {services.map(service => <article className="serviceImageCard" key={service.no}>
            <div className="serviceCardImage"><Image src={`/assets/services/${service.image}.jpg`} alt={service.alt} width={1200} height={675} sizes="(max-width: 600px) 100vw, 50vw" /></div>
            <div className="serviceCardContent">
              <span className="serviceCardNumber">{service.no} / SERVICE</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link className="textLink" href="/contact">Request a quote <span aria-hidden="true">↗</span></Link>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  </>;
}
