import Image from 'next/image';
import Link from 'next/link';
import type { Vehicle } from '@/lib/data';

export default function VehicleCard({ vehicle, enquiryQuery = '' }: { vehicle: Vehicle; enquiryQuery?: string }) {
  const detailHref = `/fleet/${vehicle.slug}${enquiryQuery}`;
  const contactParams = new URLSearchParams(enquiryQuery.replace(/^\?/, ''));
  contactParams.set('vehicle', vehicle.name);
  const contactHref = `/contact?${contactParams.toString()}`;

  return <article className="vehicleCard">
    <Link href={detailHref} className="vehicleImageWrap" aria-label={`View ${vehicle.name} details`}>
      <Image src={vehicle.image} alt={`AI-generated illustration of ${vehicle.name}`} width={900} height={600} sizes="(max-width: 600px) 100vw, (max-width: 800px) 50vw, 33vw" className="vehicleImage" />
    </Link>
    <div className="vehicleCardBody">
      <span className="vehicleCardKicker">{vehicle.category} / THE COLLECTION</span>
      <h3><Link href={detailHref}>{vehicle.name}</Link></h3>
      <p className="vehicleCardSummary">{vehicle.category === 'SUV' ? 'Explore the SUV collection for your next journey.' : 'Discover a sedan for city travel and longer routes.'}</p>
      <div className="cardActions">
        <Link href={detailHref} className="vehicleDetailsLink">Explore vehicle <span aria-hidden="true">↗</span></Link>
        <Link href={contactHref} className="vehicleEnquiryLink">Enquire <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  </article>;
}
