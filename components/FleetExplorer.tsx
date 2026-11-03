'use client';

import { useEffect, useState } from 'react';
import VehicleCard from '@/components/VehicleCard';
import { vehicleCategories, type Vehicle } from '@/lib/data';

export default function FleetExplorer({ vehicles, initialCategory = 'all', city, pickup, dropoff }: { vehicles: Vehicle[]; initialCategory?: string; city?: string; pickup?: string; dropoff?: string }) {
  const [category, setCategory] = useState(vehicleCategories.some(type => type === initialCategory) ? initialCategory : 'all');
  useEffect(() => {
    setCategory(vehicleCategories.some(type => type === initialCategory) ? initialCategory : 'all');
  }, [initialCategory]);
  const filtered = vehicles.filter(vehicle => category === 'all' || vehicle.category === category);
  const details = [city && `Pickup: ${city}`, pickup && `From: ${pickup}`, dropoff && `Until: ${dropoff}`].filter(Boolean);
  const query = new URLSearchParams();
  if (city) query.set('city', city);
  if (pickup) query.set('pickup', pickup);
  if (dropoff) query.set('dropoff', dropoff);
  const enquiryQuery = query.size ? `?${query.toString()}` : '';
  return <>
    {details.length > 0 && <div className="searchNotice"><strong>Your trip details</strong><span>{details.join(' · ')}</span><small>Vehicle availability and service area are confirmed when you enquire.</small></div>}
    <div className="filterBar" role="group" aria-label="Filter vehicles by type">{['all', ...vehicleCategories].map(type => <button type="button" key={type} className={category === type ? 'filter active' : 'filter'} aria-pressed={category === type} onClick={() => setCategory(type)}>{type === 'all' ? 'All vehicles' : type}</button>)}<span className="resultCount">{filtered.length} vehicles</span></div>
    <div className="vehicleGrid">{filtered.map(vehicle => <VehicleCard key={vehicle.slug} vehicle={vehicle} enquiryQuery={enquiryQuery} />)}</div>
  </>;
}
