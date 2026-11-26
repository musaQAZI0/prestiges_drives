import Badge from '@/components/Badge';
import ArrowIcon from '@/components/ArrowIcon';
﻿import Image from 'next/image';
import Link from 'next/link';
import { rateLabel, type Vehicle } from '@/lib/data';

export default function VehicleCard({ vehicle, enquiryQuery = '' }: { vehicle: Vehicle; enquiryQuery?: string }) {
  const detailHref = `/fleet/${vehicle.slug}${enquiryQuery}`;
  const contactParams = new URLSearchParams(enquiryQuery.replace(/^\?/, ''));
  contactParams.set('vehicle', vehicle.name);
  const contactHref = `/contact?${contactParams.toString()}`;

  return <article className={`vehicleCard${vehicle.studioImage ? ' vehicleCardStudio' : ''}`}>
    <Link href={detailHref} className="vehicleImageWrap" aria-label={`View ${vehicle.name} details`}>
      <div className="vehicleCardBadges"><Badge variant="vehicle">{vehicle.category === 'MPV' ? 'MUV' : vehicle.category === 'Van' ? 'Hiace' : vehicle.category}</Badge></div>
      {vehicle.image ? <Image src={vehicle.image} alt={`${vehicle.name} exterior view`} width={900} height={600} sizes="(max-width: 600px) 100vw, (max-width: 800px) 50vw, 33vw" className="vehicleImage" /> : <div className="vehiclePlaceholder"><span>{vehicle.category}</span><strong>{vehicle.name}</strong><small>Photo coming soon</small></div>}
    </Link>
    <div className="vehicleCardBody">
      <span className="vehicleCardKicker">{vehicle.category} / THE COLLECTION</span>
      <h3><Link href={detailHref}>{vehicle.name}</Link></h3>
      <p className="vehicleCardSummary">{rateLabel(vehicle)}{vehicle.referenceRate && <small className="referenceRateNote">Reference rate ? final quote confirmed for your trip</small>}</p>
      <div className="cardActions">
        <Link href={detailHref} className="vehicleDetailsLink">View Details <span aria-hidden="true"><ArrowIcon direction="up-right" /></span></Link>
        <Link href={contactHref} className="vehicleEnquiryLink">Get a Quote <span aria-hidden="true"><ArrowIcon /></span></Link>
      </div>
    </div>
  </article>;
}
