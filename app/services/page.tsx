import ArrowIcon from '@/components/ArrowIcon';
﻿import Link from 'next/link';

const services = [
  { title: 'Wedding Events', text: 'A considered arrival for your most memorable day. Share your venue, timings and preferred vehicle.' },
  { title: 'Airport Transfers', text: 'Plan your arrival around flight details, your destination and luggage requirements.' },
  { title: 'Corporate Travel', text: 'Transport shaped around meetings, guest visits and business itineraries.' },
  { title: 'Private Journeys', text: 'City visits, family occasions and longer escapes. Choose the route that suits your plans.' },
  { title: 'Group Travel', text: 'Bring everyone together with spacious transport for shared journeys and guest arrivals.' },
];
export default function ServicesPage() {
  return <div className="premiumServices refinedPages servicesOverview">
    <div className="servicesFlow" aria-hidden="true" />
    <div className="container premiumServicesInner">
      <header className="premiumServicesIntro"><span className="premiumServicesEyebrow">PRESTIGE DRIVES / TRAVEL, CONSIDERED</span><h1>Travel for every <span>occasion.</span></h1><div className="servicesGoldRule" /><p>From life's special occasions to everyday journeys.<br />Thoughtful transport, tailored around you.</p></header>
      <section className="premiumServiceCards" aria-label="Our services">{services.map((service, index) => <article className="premiumServiceCard" key={service.title}><span className="premiumServiceNumber">0{index + 1}</span><h2>{service.title}</h2><p>{service.text}</p><Link href={`/contact?service=${encodeURIComponent(service.title)}`}>Enquire about this service <span aria-hidden="true"><ArrowIcon direction="up-right" /></span></Link></article>)}</section>
      <section className="customServicePanel"><span className="premiumServicesEyebrow">YOUR JOURNEY, YOUR WAY</span><h2>Need a custom service?</h2><p>Tell us your route, dates and preferences. We'll help you explore a transport arrangement for your occasion.</p><div><Link href="/contact" className="customServicePrimary">Get a Custom Quote <ArrowIcon direction="up-right" /></Link><Link href="/fleet" className="customServiceSecondary">Explore Our Fleet</Link></div></section>
    </div>
  </div>;
}
