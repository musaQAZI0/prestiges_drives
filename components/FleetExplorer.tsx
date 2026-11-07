'use client';

import { useEffect, useState } from 'react';
import VehicleCard from '@/components/VehicleCard';
import { type Vehicle } from '@/lib/data';
import { fleetServices } from '@/lib/fleet-services';
import { sortFleetByModel } from '@/lib/fleet-order';

const categories = [
  { id: 'SUV', label: 'SUVs', types: ['SUV', 'Pickup'] },
  { id: 'MPV', label: 'MUVs', types: ['MPV'] },
  { id: 'Hatchback', label: 'Hatchback', types: ['Hatchback'] },
  { id: 'Sedan', label: 'Sedan', types: ['Sedan'] },
  { id: 'Bus', label: 'Buses', types: ['Bus'] },
  { id: 'Van', label: 'Hiace', types: ['Van'] },
];
const resolveCategory = (value: string) => value === 'all' ? 'all' : categories.some(item => item.id === value) ? value : 'SUV';

export default function FleetExplorer({ vehicles, initialCategory = 'SUV', city, pickup, dropoff, serviceMode = false }: { vehicles: Vehicle[]; initialCategory?: string; city?: string; pickup?: string; dropoff?: string; serviceMode?: boolean }) {
  const [category, setCategory] = useState(resolveCategory(initialCategory));
  const [service, setService] = useState('events');
  useEffect(() => setCategory(resolveCategory(initialCategory)), [initialCategory]);
  const selectedService = serviceMode ? fleetServices.find(item => item.id === service) : undefined;
  const selectedCategory = categories.find(item => item.id === category);
  // Customer-requested browsing groups; crossovers are presented under MUVs.
  const muvSlugs = ['kia-sportage', 'mg-hs', 'hyundai-tucson', 'honda-brv-new-model', 'honda-brv-7-seater'];
  const matching = vehicles.filter(vehicle => serviceMode
    ? !selectedService || (selectedService.vehicleSlugs ? selectedService.vehicleSlugs.includes(vehicle.slug) : selectedService.types.includes(vehicle.category))
    : category === 'all' || (category === 'MPV' ? vehicle.category === 'MPV' || muvSlugs.includes(vehicle.slug) : category === 'SUV' ? selectedCategory?.types.includes(vehicle.category) && !muvSlugs.includes(vehicle.slug) : selectedCategory?.types.includes(vehicle.category)));
  const filtered = sortFleetByModel(matching);
  const details = [city && `Pickup: ${city}`, pickup && `From: ${pickup}`, dropoff && `Until: ${dropoff}`].filter(Boolean);
  const query = new URLSearchParams();
  if (selectedService) query.set('service', selectedService.label);
  if (city) query.set('city', city);
  if (pickup) query.set('pickup', pickup);
  if (dropoff) query.set('dropoff', dropoff);
  const enquiryQuery = query.size ? `?${query.toString()}` : '';
  const options = serviceMode ? fleetServices : categories;
  const active = serviceMode ? service : category;
  const select = serviceMode ? setService : setCategory;
  return <>
    <section className="fleetServicePicker" aria-label={serviceMode ? 'Browse by service' : 'Browse by vehicle category'}>
      <span className="eyebrow dark">{serviceMode ? 'Choose your service' : 'Choose your vehicle'}</span>
      <div className="fleetServiceOptions" role="group" aria-label={serviceMode ? 'Service categories' : 'Vehicle categories'}>
        {options.map(item => <button type="button" key={item.id} className={`fleetServiceOption ${active === item.id ? 'active' : ''}`} aria-pressed={active === item.id} onClick={() => select(item.id)}>{item.label}<span aria-hidden="true">↗</span></button>)}
        <button type="button" className={`fleetServiceOption ${active === 'all' ? 'active' : ''}`} aria-pressed={active === 'all'} onClick={() => select('all')}>{serviceMode ? 'All services' : 'All vehicles'}<span aria-hidden="true">↗</span></button>
      </div>
      {serviceMode && <p>{selectedService?.description ?? 'Browse the full fleet for any occasion.'} Availability and suitability are confirmed when you enquire.</p>}
    </section>
    {details.length > 0 && <div className="searchNotice"><strong>Your trip details</strong><span>{details.join(' · ')}</span><small>Vehicle availability and service area are confirmed when you enquire.</small></div>}
    <div aria-live="polite" className="fleetResultSummary">{filtered.length} vehicles · {serviceMode ? selectedService?.label ?? 'All services' : selectedCategory?.label ?? 'All vehicles'}</div>
    {filtered.length ? <div className="vehicleGrid fleetServiceResults" key={active}>{filtered.map(vehicle => <VehicleCard key={vehicle.slug} vehicle={vehicle} enquiryQuery={enquiryQuery} />)}</div> : <div className="searchNotice"><strong>No vehicles in this category.</strong><button type="button" className="btn btnPrimary" onClick={() => select('all')}>Show all vehicles</button></div>}
  </>;
}
