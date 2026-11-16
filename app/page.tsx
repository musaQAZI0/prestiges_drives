import HeroBanner from '@/components/HeroBanner';
import SearchModule from '@/components/SearchModule';
import HomeFeaturedFleet from '@/components/HomeFeaturedFleet';
import HomeWhyChoose from '@/components/HomeWhyChoose';

export default function HomePage() {
  return <>
    <HeroBanner eyebrow="PRESTIGE DRIVES / PAKISTAN" title={<>Drive Your<br /><em>Next Experience</em></>} subtitle="Explore our vehicle range and enquire for your next journey. From business travel to special occasions, tell us where you’re going." image="/assets/optimized/heroes/home-hero-natural-v2.webp" primaryLabel="Explore Our Fleet" secondaryLabel="Get a quote" home />
    <div className="container searchOverlap"><SearchModule /></div>
    <HomeFeaturedFleet />
    <HomeWhyChoose />
  </>;
}
