import Image from 'next/image';
import Link from 'next/link';

const steps = [
  { n: '01', title: 'Find your fit', text: 'Explore the collection or ask for a vehicle recommendation based on your journey.' },
  { n: '02', title: 'Make it personal', text: 'Share your route, dates, passengers and preferences in your quote request.' },
  { n: '03', title: 'Agree the details', text: 'Confirm the vehicle, availability, inclusions, price and terms before booking.' },
];
export default function AboutPage() {
  return <div className="premiumServices premiumAbout refinedPages">
    <div className="servicesFlow" aria-hidden="true" />
    <div className="container premiumServicesInner">
      <header className="premiumServicesIntro"><span className="premiumServicesEyebrow">OUR APPROACH / PAKISTAN</span><h1>About <span>Prestige Drives</span></h1><div className="servicesGoldRule" /><p>The right car. A clear plan.<br />Considered journeys, from your first enquiry.</p></header>
      <section className="aboutStoryPanels" aria-labelledby="ourStoryHeading">
        <div className="aboutStoryPanel"><span className="premiumServicesEyebrow">THE JOURNEY STARTS HERE</span><h2 id="ourStoryHeading">Travel starts with your plans.</h2><p>Explore sedans, SUVs, compact cars and group transport with Prestige Drives. Our service enquiries cover airport transfers, business travel, weddings, private journeys and group trips in Pakistan.</p><p>Start with a vehicle or an occasion. Tell us your pickup location, destination and dates; we’ll discuss the available options and a quote for that route. You can ask for a recommendation if you’re still deciding.</p><Link href="/fleet" className="aboutStoryLink">Find your next drive <span aria-hidden="true">↗</span></Link></div>
        <figure className="aboutPhotoPanel"><Image src="/assets/optimized/heroes/home-original-city.webp" alt="Illustration of a black executive sedan outside a warmly lit building at dusk" width={1672} height={941} priority sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>THE JOURNEY IS PART OF THE OCCASION.</figcaption></figure>
      </section>
      <section className="aboutValues" aria-label="Our approach"><div><span>Personal</span><p>Plans built around you</p></div><div><span>Considered</span><p>Details discussed together</p></div><div><span>Versatile</span><p>Vehicles for your occasion</p></div><div><span>Clear</span><p>Terms before booking</p></div></section>
      <section className="aboutProcess" aria-labelledby="aboutProcessHeading"><div className="serviceFleetHeading"><span className="premiumServicesEyebrow">HOW IT WORKS</span><h2 id="aboutProcessHeading">From an idea to an itinerary.</h2></div><div className="premiumServiceCards">{steps.map(step => <article className="premiumServiceCard" key={step.n}><span className="premiumServiceNumber">{step.n} / YOUR JOURNEY</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
      <section className="customServicePanel"><span className="premiumServicesEyebrow">YOUR NEXT JOURNEY</span><h2>Where will it take you?</h2><p>Share your passengers, luggage, pickup timing and destinations. Let's start with the details that matter to your trip.</p><div><Link href="/contact" className="customServicePrimary">Get a Quote ↗</Link><Link href="/services" className="customServiceSecondary">Explore Services</Link></div></section>
    </div>
  </div>;
}
