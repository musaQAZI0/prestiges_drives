import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { vehicles } from '@/lib/data';

export function generateStaticParams() { return vehicles.map(vehicle => ({ slug: vehicle.slug })); }

export default function VehiclePage({ params, searchParams }: { params: { slug: string }; searchParams: { city?: string; pickup?: string; dropoff?: string } }) {
  const vehicle = vehicles.find(item => item.slug === params.slug);
  if (!vehicle) notFound();
  const enquiryParams = new URLSearchParams({ vehicle: vehicle.name });
  if (searchParams.city) enquiryParams.set('city', searchParams.city);
  if (searchParams.pickup) enquiryParams.set('pickup', searchParams.pickup);
  if (searchParams.dropoff) enquiryParams.set('dropoff', searchParams.dropoff);
  return <><section className="vehicleDetailIntro"><div className="container"><Link href="/fleet" className="backLink">← Back to the fleet</Link><span className="eyebrow dark">{vehicle.category} / THE COLLECTION</span><h1>{vehicle.name}</h1><p>Preview this model in an AI-generated illustration, then enquire for availability and the details of your journey.</p></div></section><section className="detailGallery container"><div className="detailMainImage"><Image src={vehicle.gallery[0]} alt={`Front or exterior view of ${vehicle.name}`} width={1200} height={850} priority /></div>{vehicle.gallery.slice(1).map((image, index) => <div className="detailExtraImage" key={image}><Image src={image} alt={`Additional view ${index + 2} of ${vehicle.name}`} width={800} height={600} /></div>)}</section><section className="section"><div className="container detailGrid"><div><span className="eyebrow dark">THE DETAILS</span><h2>Make the journey yours.</h2><p>Share your pickup, destination, dates, and any requirements. We’ll confirm the vehicle’s specifications, availability, inclusions, and rental terms when preparing your quotation.</p><div className="detailFacts"><div><small>Vehicle type</small><strong>{vehicle.category}</strong></div><div><small>Seating & transmission</small><strong>Confirm on enquiry</strong></div><div><small>Driver options</small><strong>Confirm on enquiry</strong></div><div><small>Pricing & terms</small><strong>Quoted for your trip</strong></div></div></div><aside className="detailAside"><span className="eyebrow dark">ENQUIRE ABOUT THIS VEHICLE</span><h3>Ready to plan your drive?</h3><p>Request a tailored quote. Preparing an enquiry does not reserve the car.</p><Link href={`/contact?${enquiryParams.toString()}`} className="btn btnPrimary">Request availability →</Link></aside></div></section></>;
}
