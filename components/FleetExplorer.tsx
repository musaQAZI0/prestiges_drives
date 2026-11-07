'use client';

import { useEffect, useState } from 'react';
import VehicleCard from '@/components/VehicleCard';
import { type Vehicle } from '@/lib/data';
import { fleetServices } from '@/lib/fleet-services';
import { sortFleetByModel } from '@/lib/fleet-order';

export default function FleetExplorer({ vehicles, initialCategory = 'all', city, pickup, dropoff }: { vehicles: Vehicle[]; initialCategory?: string; city?: string; pickup?: string; dropoff?: string }) {
  const [service, setService] = useState(initialCategory !== 'all' ? 'all' : 'events');
  useEffect(() => {
    setService(initialCategory !== 'all' ? 'all' : 'events');
  }, [initialCategory]);
  const selectedService = fleetServices.find(item => item.id === service);
  const serviceVehicles = selectedService?.vehicleSlugs
    ? selectedService.vehicleSlugs.flatMap(slug => vehicles.filter(vehicle => vehicle.slug === slug))
    : vehicles.filter(vehicle => !selectedService || selectedService.types.includes(vehicle.category));
  const filtered = sortFleetByModel(serviceVehicles);
  const details = [city && `Pickup: ${city}`, pickup && `From: ${pickup}`, dropoff && `Until: ${dropoff}`].filter(Boolean);
  const query = new URLSearchParams();
  if (selectedService) query.set('service', selectedService.label === 'Events' || selectedService.label === 'Weddings' ? 'Events & weddings' : selectedService.label);
  if (city) query.set('city', city);
  if (pickup) query.set('pickup', pickup);
  if (dropoff) query.set('dropoff', dropoff);
  const enquiryQuery = query.size ? `?${query.toString()}` : '';
  return <>
    <section className="fleetServicePicker" aria-labelledby="fleetServicesHeading">
      <span className="eyebrow dark" id="fleetServicesHeading">Choose your service</span>
      <div className="fleetServiceOptions" role="group" aria-label="Filter vehicles by service">
        {fleetServices.map(item => <button type="button" key={item.id} className={`fleetServiceOption ${service === item.id ? 'active' : ''}`} aria-pressed={service === item.id} onClick={() => { setService(item.id); }}>{item.label}<span aria-hidden="true">↗</span></button>)}
        <button type="button" className={`fleetServiceOption ${service === 'all' ? 'active' : ''}`} aria-pressed={service === 'all'} onClick={() => { setService('all'); }}>All services<span aria-hidden="true">↗</span></button>
      </div>
      <p>{selectedService?.description ?? 'Browse the full fleet for any occasion.'} Availability and suitability are confirmed when you enquire.</p>
    </section>
    {details.length > 0 && <div className="searchNotice"><strong>Your trip details</strong><span>{details.join(' · ')}</span><small>Vehicle availability and service area are confirmed when you enquire.</small></div>}
    <div aria-live="polite" className="fleetResultSummary">{filtered.length} vehicles · {selectedService?.label ?? 'All services'}</div>
    {filtered.length ? <div className="vehicleGrid">{filtered.map(vehicle => <VehicleCard key={vehicle.slug} vehicle={vehicle} enquiryQuery={enquiryQuery} />)}</div> : <div className="searchNotice"><strong>No vehicles match these filters.</strong><button type="button" className="btn btnPrimary" onClick={() => setService('all')}>Show all services</button></div>}
  </>;
}
