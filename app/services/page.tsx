import HeroBanner from '@/components/HeroBanner';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  { no: '01', title: 'Airport & city transfers', image: 'airport-transfers', alt: 'Black SUV outside a warmly lit airport terminal', text: 'Plan an airport arrival or a journey across the city. Include your flight details, pickup point, destination, and luggage requirements in your request.' },
  { no: '02', title: 'Corporate travel', image: 'corporate-travel', alt: 'Executive sedan at a modern corporate office entrance', text: 'Plan transport around meetings, guest visits, and business itineraries. Share the number of passengers, stops, and timings so the details can be discussed together.' },
  { no: '03', title: 'Events & weddings', image: 'events-weddings', alt: 'White luxury SUV with flowers at an elegant wedding venue', text: 'Choose a vehicle for a wedding or special event. Share the venue, arrival time, and any decoration preferences so availability and arrangements can be confirmed.' },
  { no: '04', title: 'Private journeys', image: 'private-journeys', alt: 'Black SUV beside a scenic mountain road at sunset', text: 'From a city visit to a longer route, begin with your travel dates and destination. Include passenger numbers, luggage, and planned stops for a tailored discussion.' }
];

export default function ServicesPage() {
  return <>
    <HeroBanner eyebrow="What we can arrange" title="Travel on your terms." subtitle="From a simple transfer to an important occasion, start with the journey you have in mind." image="/assets/optimized/heroes/services-hero-v4.webp" compact primaryLabel="Get a quote" primaryHref="/contact" secondaryLabel="Explore services" secondaryHref="#services" />
    <section id="services" className="section ivorySection">
      <div className="container">
        <div className="sectionHeading"><span className="eyebrow dark">OUR SERVICES</span><h2>Thoughtful travel, from start to finish.</h2><p>Each request is shaped around your dates, route, vehicle preference, and requirements.</p></div>
        <div className="serviceGrid twoByTwo">
          {services.map(service => <article className="serviceImageCard" key={service.no}>
            <div className="serviceCardImage"><Image src={`/assets/optimized/services/${service.image}.webp`} alt={service.alt} width={1200} height={675} sizes="(max-width: 600px) 100vw, 50vw" /></div>
            <div className="serviceCardContent">
              <span className="serviceCardNumber">{service.no} / SERVICE</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link className="textLink" href={`/contact?service=${encodeURIComponent(service.title)}`}>Get a quote <span aria-hidden="true">↗</span></Link>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  </>;
}
