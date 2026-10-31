import EnquiryForm from '@/components/EnquiryForm';
import ContactChannels from '@/components/ContactChannels';

import { vehicles } from '@/lib/data';

export default function ContactPage({ searchParams }: { searchParams: { vehicle?: string; city?: string; pickup?: string; dropoff?: string; service?: string } }) {
  const selectedVehicle = vehicles.some(vehicle => vehicle.name === searchParams.vehicle) ? searchParams.vehicle : '';
  return <><section className="section ivorySection contactPage" id="enquire"><div className="container contactGrid"><div><div className="sectionHeading"><span className="eyebrow dark">GET IN TOUCH</span><h1 className="contactTitle">Let’s get the details right.</h1><p>Your route, your dates, your kind of journey. Share the essentials and prepare a tailored quote request.</p></div><div className="contactNote"><span>01</span><p>Availability, pricing, service area, driver options, and terms are confirmed directly before a booking.</p></div><div className="contactNote"><span>02</span><p>Your form details stay in your browser until you choose to copy or send the prepared message.</p></div><ContactChannels /></div><EnquiryForm initialService={searchParams.service} initialVehicle={selectedVehicle} initialCity={searchParams.city} initialPickup={searchParams.pickup} initialDropoff={searchParams.dropoff} /></div></section></>;
}
