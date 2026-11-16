import Link from 'next/link';
import VehicleCard from './VehicleCard';
import { vehicles } from '@/lib/data';

const picks = ['toyota-lc-200', 'kia-sportage', 'toyota-yaris']
  .flatMap(slug => vehicles.filter(vehicle => vehicle.slug === slug));

export default function HomeFeaturedFleet() {
  return <section className="section homeFeaturedFleet" aria-labelledby="home-fleet-heading"><div className="container">
    <div className="homeSectionIntro"><span className="homeSectionBadge">Our Featured Fleet</span><h2 id="home-fleet-heading">Rent a Car for Every Journey</h2><p>Explore SUVs, city cars and practical options for airport transfers, family trips and journeys beyond the city.</p></div>
    <div className="vehicleGrid">{picks.map(vehicle => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}</div>
    <div className="homeFleetEnd"><p>Actual appearance and availability are confirmed on enquiry.</p><Link href="/fleet" className="btn btnGoldOutline">Explore the full fleet <span aria-hidden="true">↗</span></Link></div>
  </div></section>;
}
