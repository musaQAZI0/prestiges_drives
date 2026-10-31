import Image from 'next/image';
import Link from 'next/link';

const services = [
  { title: 'Airport & city travel', label: '01 / ARRIVALS & DEPARTURES', image: 'airport-transfers', service: 'Airport & city transfers', text: 'From your first arrival to your next destination. Share your pickup, timing, and route.', alt: 'Illustration of an SUV outside an airport terminal' },
  { title: 'Corporate journeys', label: '02 / BUSINESS', image: 'corporate-travel', service: 'Corporate travel', text: 'Plan around the meetings and people that matter.', alt: 'Illustration of an executive sedan at an office entrance' },
  { title: 'Events & weddings', label: '03 / OCCASIONS', image: 'events-weddings', service: 'Events & weddings', text: 'A considered arrival for a date worth remembering.', alt: 'Illustration of a white SUV at a wedding venue' }
];
export default function HomeServices() {
  return <section className="section homeServices"><div className="container"><div className="servicesHeading"><span className="eyebrow dark">TRAVEL, CONSIDERED / 02</span><h2>For the moments<br />that <em>matter.</em></h2><Link href="/services" className="textLink">Explore all services &rarr;</Link></div>
    <div className="servicesComposition">{services.map((service, index) => <article className={`serviceStory ${index === 0 ? 'serviceStoryLead' : ''}`} key={service.image}>
      <div className="serviceStoryVisual"><Image src={`/assets/services/${service.image}.jpg`} alt={service.alt} fill sizes={index === 0 ? '(max-width: 800px) 100vw, 55vw' : '(max-width: 800px) 100vw, 25vw'} /></div>
      <div className="serviceStoryCopy"><span className="eyebrow">{service.label}</span><h3>{service.title}</h3><p>{service.text}</p><Link href={`/contact?service=${encodeURIComponent(service.service)}`} className="serviceStoryLink">Plan this journey <span aria-hidden="true">&rarr;</span></Link></div>
    </article>)}</div><p className="serviceDisclosure">Illustrative imagery for the journeys you have in mind.</p>
  </div></section>;
}
