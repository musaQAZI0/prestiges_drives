const benefits = [
  { title: 'Clear arrangements', text: 'Discuss availability, pricing and rental terms before confirming your journey.', icon: 'shield' },
  { title: 'Travel around your plans', text: 'Share your dates, pickup time and itinerary so the arrangements fit your trip.', icon: 'clock' },
  { title: 'A tailored quote', text: 'Get a quote based on your vehicle, route and preferences, with details agreed before booking.', icon: 'card' },
  { title: 'Your route, your way', text: 'Enquire about city travel, airport transfers and longer journeys across Pakistan.', icon: 'pin' },
  { title: 'Help choosing a car', text: 'Tell us about your passengers and luggage, and ask for a suitable vehicle recommendation.', icon: 'chat' },
  { title: 'A versatile collection', text: 'Explore compact cars, sedans, SUVs and group transport in one place.', icon: 'car' },
  { title: 'For your occasion', text: 'Plan transport for business, family travel, weddings and other special occasions.', icon: 'star' },
  { title: 'Simple enquiries', text: 'Choose a car, add your trip details and prepare a message to start the conversation.', icon: 'arrow' },
];

function BenefitIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    shield: <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2" /></>,
    card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h3" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
    chat: <path d="M21 11a9 9 0 0 1-9 9H4l-2 2V11a9 9 0 0 1 19 0ZM7 10h10M7 14h6" />,
    car: <><path d="m5 8 2-4h10l2 4 2 3v7H3v-7l2-3ZM5 8h14M3 14h18M6 18v3M18 18v3" /><path d="M6 11h2M16 11h2" /></>,
    star: <path d="m12 3 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z" />,
    arrow: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
  };
  return <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function HomeWhyChoose() {
  return <section className="section homeWhyChoose" aria-labelledby="home-trust-heading"><div className="container">
    <div className="homeSectionIntro"><span className="homeSectionBadge">Why Choose Us</span><h2 id="home-trust-heading">Your Journey. Thoughtfully Arranged.</h2><p>From choosing a vehicle to discussing the details, plan your next journey with clarity and confidence.</p></div>
    <div className="homeBenefitsGrid">{benefits.map(item => <article className="homeBenefit" key={item.title}><span className="homeBenefitIcon"><BenefitIcon name={item.icon} /></span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
  </div></section>;
}
