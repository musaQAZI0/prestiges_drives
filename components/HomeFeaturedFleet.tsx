import Badge from '@/components/Badge';
import ArrowIcon from '@/components/ArrowIcon';
import Link from 'next/link';
import VehicleCard from './VehicleCard';
import { vehicles } from '@/lib/data';

const picks = ['toyota-lc-200', 'kia-sportage', 'toyota-yaris']
  .flatMap(slug => vehicles.filter(vehicle => vehicle.slug === slug));

export default function HomeFeaturedFleet() {
  return <section className="section homeFeaturedFleet" aria-labelledby="home-fleet-heading"><div className="container">
    <div className="homeSectionIntro"><Badge>A few from our collection</Badge><h2 id="home-fleet-heading">Find your kind of drive.</h2><p>Room for family, comfort for business, or something simple for the city.</p></div>
    <div className="vehicleGrid">{picks.map(vehicle => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}</div>
    <div className="homeFleetEnd"><p>Vehicle appearance and availability are confirmed on enquiry.</p><Link href="/fleet" className="btn btnGoldOutline">View All Vehicles <span aria-hidden="true"><ArrowIcon direction="up-right" /></span></Link></div>
  </div></section>;
}
