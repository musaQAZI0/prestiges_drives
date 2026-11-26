'use client';
import ArrowIcon from '@/components/ArrowIcon';

import { useEffect, useState } from 'react';
import VehicleCard from '@/components/VehicleCard';
import { type Vehicle } from '@/lib/data';
import { fleetServices } from '@/lib/fleet-services';
import { sortFleetByModel } from '@/lib/fleet-order';
import Link from 'next/link';
import { normalizeFleetCategory } from '@/lib/fleet-filters';

// Temporary editorial picks; replace this list when the owner confirms them.
const featuredSlugs = ['kia-sportage', 'toyota-lc-200', 'suzuki-alto', 'honda-brv-new-model', 'toyota-yaris', 'suzuki-cultus', 'toyota-revo-new-model', 'toyota-coaster', 'toyota-grand-cabin-224'];

const categories = [
  { id: 'SUV', label: 'SUVs', types: ['SUV'] },
  { id: 'MPV', label: 'MUVs', types: ['MPV'] },
  { id: 'Sedan', label: 'Sedan', types: ['Sedan'] },
  { id: 'Hatchback', label: 'Hatchback', types: ['Hatchback'] },
  { id: 'Bus', label: 'Buses', types: ['Bus'] },
  { id: 'Van', label: 'Hiace', types: ['Van'] },
];

export default function FleetExplorer({ vehicles, initialCategory = '', initialSearch = '', city, pickup, dropoff, serviceMode = false }: { vehicles: Vehicle[]; initialCategory?: string; initialSearch?: string; city?: string; pickup?: string; dropoff?: string; serviceMode?: boolean }) {
  const [category, setCategory] = useState(() => normalizeFleetCategory(initialCategory));
  const [service, setService] = useState('events');
  const [search, setSearch] = useState(initialSearch);
  const [submittedSearch, setSubmittedSearch] = useState(initialSearch);
  useEffect(() => { setSearch(initialSearch); setSubmittedSearch(initialSearch); }, [initialSearch]);
  const showingFeatured = !serviceMode && !category;
  useEffect(() => setCategory(normalizeFleetCategory(initialCategory)), [initialCategory]);
  const selectedService = serviceMode ? fleetServices.find(item => item.id === service) : undefined;
  const selectedCategory = categories.find(item => item.id === category);
  const matching = vehicles.filter(vehicle => serviceMode
    ? !selectedService || (selectedService.vehicleSlugs ? selectedService.vehicleSlugs.includes(vehicle.slug) : selectedService.types.includes(vehicle.category))
    : showingFeatured ? featuredSlugs.includes(vehicle.slug) : category === 'all' || selectedCategory?.types.includes(vehicle.category));
  const searched = matching.filter(vehicle => vehicle.name.toLowerCase().includes(submittedSearch.trim().toLowerCase()));
  const filtered = serviceMode ? sortFleetByModel(searched) : searched;
  const details = [city && `Pickup: ${city}`, pickup && `From: ${pickup}`, dropoff && `Until: ${dropoff}`].filter(Boolean);
  const query = new URLSearchParams();
  if (selectedService) query.set('service', selectedService.label);
  if (!serviceMode && category) query.set('category', category);
  if (!serviceMode && submittedSearch.trim()) query.set('q', submittedSearch.trim());
  if (city) query.set('city', city);
  if (pickup) query.set('pickup', pickup);
  if (dropoff) query.set('dropoff', dropoff);
  const enquiryQuery = query.size ? `?${query.toString()}` : '';
  const options = serviceMode ? fleetServices : categories;
  const active = serviceMode ? service : category;
  // Keep filters shareable without fetching a new page for each selection.
  const updateUrl = (nextCategory: string, nextSearch: string) => {
    if (serviceMode) return;
    const url = new URL(window.location.href);
    nextCategory ? url.searchParams.set('category', nextCategory) : url.searchParams.delete('category');
    nextSearch.trim() ? url.searchParams.set('q', nextSearch.trim()) : url.searchParams.delete('q');
    window.history.replaceState(null, '', url.pathname + url.search + url.hash);
  };
  const select = (value: string) => {
    if (serviceMode) setService(value);
    else { setCategory(value); updateUrl(value, submittedSearch); }
  };
  const reset = (value = '') => {
    setCategory(value); setSearch(''); setSubmittedSearch('');
    if (serviceMode) setService(value || 'events');
    updateUrl(value, '');
  };
  return <>
    {!serviceMode && <form className="fleetSearchPanel" onSubmit={event => { event.preventDefault(); setSubmittedSearch(search); const nextCategory = category || 'all'; setCategory(nextCategory); updateUrl(nextCategory, search); }}>
      <div className="fleetSearchHeading"><strong>Find a vehicle</strong><button type="button" onClick={() => reset()}>Reset filters</button></div>
      <div className="fleetSearchFields"><label>Search car<input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search by vehicle name or model" /></label><button type="submit" className="btn btnPrimary">Search <span aria-hidden="true"><ArrowIcon direction="up-right" /></span></button></div>
    </form>}
    <section className={`fleetServicePicker ${!serviceMode ? 'fleetCategoryPills' : ''}`} aria-label={serviceMode ? 'Browse by service' : 'Browse by vehicle category'}>
      <span className="eyebrow dark">{serviceMode ? 'Choose your service' : 'Choose your vehicle'}</span>
      <div className="fleetServiceOptions" role="group" aria-label={serviceMode ? 'Service categories' : 'Vehicle categories'}>
        {!serviceMode && <button type="button" className={`fleetServiceOption ${active === '' ? 'active' : ''}`} aria-pressed={active === ''} onClick={() => select('')}>Featured</button>}
        {options.map(item => <button type="button" key={item.id} className={`fleetServiceOption ${active === item.id ? 'active' : ''}`} aria-pressed={active === item.id} onClick={() => select(item.id)}>{item.label}<span aria-hidden="true"><ArrowIcon direction="up-right" /></span></button>)}
        <button type="button" className={`fleetServiceOption ${active === 'all' ? 'active' : ''}`} aria-pressed={active === 'all'} onClick={() => select('all')}>{serviceMode ? 'All services' : 'All vehicles'}<span aria-hidden="true"><ArrowIcon direction="up-right" /></span></button>
      </div>
      {serviceMode && <p>{selectedService?.description ?? 'Browse the full fleet for any occasion.'} Availability and suitability are confirmed when you enquire.</p>}
    </section>
    {details.length > 0 && <div className="searchNotice"><strong>Your trip details</strong><span>{details.join(' · ')}</span><small>Vehicle availability and service area are confirmed when you enquire.</small></div>}
    <>
      <div aria-live="polite" className="fleetResultSummary">Showing <strong>{filtered.length}</strong> cars <span>{showingFeatured ? 'Featured selection' : serviceMode ? selectedService?.label ?? 'All services' : selectedCategory?.label ?? 'All vehicles'}</span></div>
      {filtered.length ? <div className="vehicleGrid fleetServiceResults" key={active}>{filtered.map(vehicle => <VehicleCard key={vehicle.slug} vehicle={vehicle} enquiryQuery={enquiryQuery} />)}</div> : <div className="searchNotice"><strong>No vehicles match your search.</strong><button type="button" className="btn btnPrimary" onClick={() => reset('all')}>Clear filters</button></div>}
    </>
    {!serviceMode && <div className="fleetBackHome"><Link href="/" className="customServicePrimary">Back to Home <span aria-hidden="true"><ArrowIcon /></span></Link></div>}
  </>;
}
