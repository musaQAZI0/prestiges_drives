import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import VehicleCard from '@/components/VehicleCard';
import { serviceVehicles as vehicles, rateLabel } from '@/lib/data';
import { contactPhone, contactPhoneHref, whatsappNumber } from '@/lib/contact';

export function generateStaticParams() { return vehicles.map(vehicle => ({ slug: vehicle.slug })); }

const descriptions: Record<string, string> = {
  SUV: 'Make room for a memorable journey. An SUV for your city plans, longer routes, or a special arrival.',
  Sedan: 'A considered choice for business travel, airport arrivals, and days that deserve a little more comfort.',
  MPV: 'Bring your people and your plans together. A versatile choice for shared journeys and time away.',
  Hatchback: 'Keep your everyday journeys simple, from errands around the city to a flexible day out.',
  Van: 'Travel together, with transport arranged around your group, route, and schedule.',
  Bus: 'Bring the whole group along. Share your passenger count and itinerary to start planning.',
};

export default function VehiclePage({ params, searchParams }: { params: { slug: string }; searchParams: { category?: string; q?: string; city?: string; pickup?: string; dropoff?: string } }) {
  const vehicle = vehicles.find(item => item.slug === params.slug);
  if (!vehicle) notFound();
  const fleetParams = new URLSearchParams();
  for (const key of ['category', 'q', 'city', 'pickup', 'dropoff'] as const) {
    const value = searchParams[key];
    if (typeof value === 'string' && value) fleetParams.set(key, value);
  }
  const backHref = fleetParams.size ? `/fleet?${fleetParams}` : '/fleet';
  const enquiryParams = new URLSearchParams({ vehicle: vehicle.name });
  for (const key of ['city', 'pickup', 'dropoff'] as const) {
    const value = searchParams[key];
    if (typeof value === 'string' && value) enquiryParams.set(key, value);
  }
  const category = vehicle.category === 'MPV' ? 'MUV' : vehicle.category === 'Van' ? 'Hiace' : vehicle.category;
  const images = Array.from(new Set([vehicle.image, ...vehicle.gallery].filter(Boolean)));
  const related = vehicles.filter(item => item.category === vehicle.category && item.slug !== vehicle.slug).slice(0, 3);
  const message = ['Hello Prestige Drives, I would like to enquire about the ' + vehicle.name + '.', ...(['city', 'pickup', 'dropoff'] as const).filter(key => searchParams[key]).map(key => key + ': ' + searchParams[key])].join('\n');
  return <div className="vehicleDetailPage"><div className="container">
    <nav className="vdBreadcrumb" aria-label="Breadcrumb"><Link href={backHref}>Fleet</Link><span aria-hidden="true">/</span><span aria-current="page">{vehicle.name}</span></nav>
    <header className="vdHeading"><div><span className="vdEyebrow">{category} / PRESTIGE DRIVES</span><h1>{vehicle.name}</h1><p>{descriptions[vehicle.category]}</p></div></header>
    <div className="vdLayout"><div className="vdMain">
      <section className="vdGallery" aria-label={vehicle.name + ' photos'}>
        <div className="vdMainPhoto">{images.length ? <Image src={images[0]} alt={vehicle.name + ' exterior'} width={1200} height={850} priority sizes="(max-width: 900px) 100vw, 65vw" /> : <div className="vdNoPhoto"><span>{category}</span><strong>{vehicle.name}</strong><p>Vehicle photos available on enquiry</p></div>}</div>
        {images.length > 1 && <div className="vdAdditionalPhotos">{images.slice(1).map((image, index) => <Image key={image} src={image} alt={'Additional view ' + (index + 2) + ' of ' + vehicle.name} width={800} height={600} sizes="(max-width: 600px) 100vw, 32vw" />)}</div>}
        <p className="vdImageNote">{vehicle.imageSource ? <>{vehicle.imageNote} <a href={vehicle.imageSource} target="_blank" rel="noopener noreferrer">Manufacturer reference</a></> : 'Illustrative vehicle image. Actual model year, specification, and condition are confirmed before booking.'}</p>
      </section>
      <section className="vdOverview" aria-labelledby="vehicle-overview"><h2 id="vehicle-overview">Good to know.</h2><p>Share your route and dates. We will confirm the model year, specifications, availability, and inclusions with your quote.</p><dl className="vdFacts"><div><dt>Journeys</dt><dd>City &amp; outstation enquiries</dd></div><div><dt>Availability</dt><dd>Confirmed for your dates</dd></div></dl></section>
    </div>
    <aside className="vdQuote" aria-labelledby="quote-heading"><span className="vdEyebrow">YOUR JOURNEY</span><h2 id="quote-heading">{typeof vehicle.referenceRate === 'number' ? rateLabel(vehicle) : 'Travel with Prestige.'}</h2><p>Tell us your plans for a tailored quote.</p>{vehicle.referenceRate && <p className="vdRateNote">Reference listing from <a href="https://isbrentacar.pk/" target="_blank" rel="noopener noreferrer">Islamabad Rent a Car</a>, checked 1 November 2026. Final pricing and inclusions are confirmed for your trip.</p>}
      {(searchParams.city || searchParams.pickup || searchParams.dropoff) && <dl className="vdQuoteSummary">{searchParams.city && <div><dt>Pickup city</dt><dd>{searchParams.city}</dd></div>}{searchParams.pickup && <div><dt>Pickup date</dt><dd>{searchParams.pickup}</dd></div>}{searchParams.dropoff && <div><dt>Return date</dt><dd>{searchParams.dropoff}</dd></div>}</dl>}
      <Link href={'/contact?' + enquiryParams} className="vdPrimary">Request a quote</Link><a className="vdSecondary" href={'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message)} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a><div className="vdCall"><a href={contactPhoneHref}>{contactPhone}</a></div>
    </aside></div>
    {related.length > 0 && <section className="vdRelated"><div className="vdRelatedHeading"><div><h2>Explore similar vehicles.</h2></div><Link href={backHref}>Explore the fleet</Link></div><div className="vehicleGrid">{related.map(item => <VehicleCard key={item.slug} vehicle={item} enquiryQuery={fleetParams.size ? '?' + fleetParams : ''} />)}</div></section>}
  </div></div>;
}
