'use client';

import { useRouter } from 'next/navigation';
import { useTransition, type FormEvent } from 'react';
import { vehicleCategories } from '@/lib/data';

export default function SearchModule() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const search = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = new URLSearchParams();
    new FormData(event.currentTarget).forEach((value, key) => {
      if (typeof value === 'string' && value) query.set(key, value);
    });
    startTransition(() => router.push(`/fleet?${query.toString()}`));
  };
  return <form className="searchModule" action="/fleet" method="get" onSubmit={search} aria-busy={pending}>
    <div className="searchIntro"><span className="eyebrow dark">Find your fit</span><h2>Where can we take you?</h2><p>Share a few details to start an availability enquiry.</p></div>
    <div className="searchFields" id="homeVehicleSearch"><label>Vehicle type<select name="category" defaultValue="all"><option value="all">All vehicles</option>{vehicleCategories.map(category => <option key={category} value={category}>{category}</option>)}</select></label><label>Pickup city<input name="city" placeholder="Enter a city" /></label><label>Pickup date<input name="pickup" type="date" /></label><label>Return date<input name="dropoff" type="date" /></label><button className="btn btnPrimary" type="submit" disabled={pending}>{pending ? 'Loading...' : 'Explore vehicles'} →</button></div>
  </form>;
}
