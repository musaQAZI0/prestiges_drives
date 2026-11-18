const benefits = [
  { title: 'A vehicle that fits', text: 'Explore sedans and SUVs, or ask us to help you choose for your passengers, luggage and route.' },
  { title: 'Details agreed together', text: 'Discuss availability, pricing and trip arrangements before you confirm your booking.' },
  { title: 'An easy conversation', text: 'Share your plans and preferences with our team to get a quote tailored to your journey.' },
];

export default function HomeWhyChoose() {
  return <section className="homeWhyChoose" aria-labelledby="home-trust-heading"><div className="container">
    <span className="homeEyebrow">THE LITTLE THINGS MATTER</span><h2 id="home-trust-heading">Thoughtfully arranged. Simply enjoyed.</h2>
    <div className="homeBenefitsGrid">{benefits.map((item, index) => <article className="homeBenefit" key={item.title}><span className="homeBenefitNumber">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
  </div></section>;
}
