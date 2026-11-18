import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner';
import SearchModule from '@/components/SearchModule';
import HomeFeaturedFleet from '@/components/HomeFeaturedFleet';
import HomeWhyChoose from '@/components/HomeWhyChoose';

export default function HomePage() {
  return <>
    <HeroBanner eyebrow="PRESTIGE DRIVES / PAKISTAN" title={<>Drive Your<br /><em>Next Experience</em></>} subtitle="Explore our vehicle range and enquire for your next journey. From business travel to special occasions, tell us where you’re going." image="/assets/optimized/heroes/home-hero-natural-v2.webp" primaryLabel="Explore Our Fleet" secondaryLabel="Get a quote" home />
    <div className="homeNatural">
    <div className="container homeBooking"><SearchModule /></div>
    <section className="homeWelcome container" aria-labelledby="home-welcome-heading">
      <span className="homeEyebrow">TRAVEL WITH PRESTIGE</span>
      <div><h2 id="home-welcome-heading">A better way to travel.</h2><p>From a day in the city to a journey further afield, find a vehicle that fits your plans. Share your dates and destination, and we’ll help you arrange the details.</p></div>
    </section>
    <HomeFeaturedFleet />
    <HomeWhyChoose />
    <section className="homeClosing container" aria-labelledby="home-closing-heading"><div><span className="homeEyebrow">LET’S MAKE A PLAN</span><h2 id="home-closing-heading">Where are you headed next?</h2><p>Tell us a little about your journey. We’ll take it from there.</p></div><Link href="/contact" className="homePrimaryLink">Plan Your Ride <span aria-hidden="true">↗</span></Link></section>
    </div>
  </>;
}
