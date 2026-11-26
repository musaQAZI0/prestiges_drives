import EnquiryForm from '@/components/EnquiryForm';
import ContactChannels from '@/components/ContactChannels';

import { serviceVehicles as vehicles } from '@/lib/data';

export default function ContactPage({ searchParams }: { searchParams: { vehicle?: string; city?: string; pickup?: string; dropoff?: string; service?: string } }) {
  const selectedVehicle = vehicles.some(vehicle => vehicle.name === searchParams.vehicle) ? searchParams.vehicle : '';
  return <section className="premiumServices premiumContact refinedPages" id="enquire"><div className="servicesFlow" aria-hidden="true" /><div className="container premiumServicesInner"><header className="premiumServicesIntro"><span className="premiumServicesEyebrow">LET'S PLAN SOMETHING MEMORABLE</span><h1>Contact <span>Us</span></h1><div className="servicesGoldRule" /><p>Your route, your dates, your kind of journey.<br />Share the essentials and choose how to get in touch.</p></header><ContactChannels /><div className="contactFormOnly"><EnquiryForm initialService={searchParams.service} initialVehicle={selectedVehicle} initialCity={searchParams.city} initialPickup={searchParams.pickup} initialDropoff={searchParams.dropoff} /></div></div></section>;
}
