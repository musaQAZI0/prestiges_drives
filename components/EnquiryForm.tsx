'use client';

import { useState, type FormEvent } from 'react';
import { vehicles } from '@/lib/data';

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '');
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function EnquiryForm({ initialService = '', initialVehicle = '', initialCity = '', initialPickup = '', initialDropoff = '' }: { initialService?: string; initialVehicle?: string; initialCity?: string; initialPickup?: string; initialDropoff?: string }) {
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [pickupDate, setPickupDate] = useState(initialPickup);
  const [copyFailed, setCopyFailed] = useState(false);
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const rows = [
      'Prestige Drives enquiry',
      `Service: ${data.get('service') || 'Please advise'}`,
      `Name: ${data.get('name')}`,
      `Contact: ${data.get('contact')}`,
      `Email: ${data.get('email') || 'Not provided'}`,
      `Vehicle: ${data.get('vehicle') || 'Please recommend'}`,
      `Pickup city / location: ${data.get('pickupLocation')}`,
      `Drop-off location: ${data.get('dropoffLocation')}`,
      `Pickup date: ${data.get('pickupDate')}`,
      `Return date: ${data.get('returnDate') || 'To be confirmed'}`,
      `Driver preference: ${data.get('driver')}`,
      `Additional details: ${data.get('notes') || 'None'}`
    ];
    setMessage(rows.join('\n'));
    setCopied(false);
    setCopyFailed(false);
  }
  async function copy() {
    try { await navigator.clipboard.writeText(message); setCopied(true); setCopyFailed(false); } catch { setCopied(false); setCopyFailed(true); }
  }
  return <div className="enquiryShell"><form className="enquiryForm" onSubmit={prepare}>
    <div className="formIntro"><span className="eyebrow dark">YOUR JOURNEY STARTS HERE</span><h2>Request your quote.</h2><p>Start with the essentials. Add preferences if you have them.</p></div>
    <input type="hidden" name="service" value={initialService} />
    {initialService && <p className="serviceSelection">Enquiring about: <strong>{initialService}</strong></p>}
    <div className="formGrid"><label>Your name *<input name="name" required autoComplete="name" placeholder="Your full name" /></label><label>Phone / WhatsApp *<input name="contact" required autoComplete="tel" type="tel" placeholder="Your contact number" /></label><label>Preferred vehicle<select name="vehicle" defaultValue={initialVehicle}><option value="">Please recommend</option>{vehicles.map(vehicle => <option key={vehicle.slug} value={vehicle.name}>{vehicle.name}</option>)}</select></label><label>Pickup city / location *<input name="pickupLocation" required defaultValue={initialCity} placeholder="Where should the journey start?" /></label><label>Drop-off location *<input name="dropoffLocation" required placeholder="Where are you going?" /></label><label>Pickup date *<input name="pickupDate" type="date" required value={pickupDate} onChange={event => setPickupDate(event.target.value)} /></label></div>
    <details className="optionalFields"><summary>Add preferences &amp; return details <span>Optional</span></summary><div className="formGrid"><label>Email address<input name="email" autoComplete="email" type="email" placeholder="Optional" /></label><label>Return date<input name="returnDate" type="date" min={pickupDate || undefined} defaultValue={initialDropoff} /></label><label>Driver preference<select name="driver" defaultValue="Please advise"><option>Please advise</option><option>With driver</option><option>Self-drive</option></select></label></div>
    <label>Anything else we should know?<textarea name="notes" rows={4} placeholder="Passengers, luggage, timing, or other requirements" /></label></details>
    <p className="formHint">Preparing this enquiry does not submit or reserve a vehicle. Service options and terms are confirmed in the reply.</p>
    <button className="btn btnPrimary" type="submit">Prepare enquiry →</button>
  </form>{message && <div className="preparedMessage" role="status"><h3>Your enquiry is ready</h3><p>Review the details, then send them using your preferred channel.</p>{copyFailed && <p role="alert">Copy was unavailable. Select the message below and copy it manually.</p>}<textarea readOnly value={message} rows={12} aria-label="Prepared enquiry message" /><div className="preparedActions"><button className="btn btnDark" type="button" onClick={copy}>{copied ? 'Copied' : 'Copy message'}</button>{contactEmail && <a className="btn btnOutline" href={`mailto:${contactEmail}?subject=${encodeURIComponent('Prestige Drives enquiry')}&body=${encodeURIComponent(message)}`}>Open email</a>}{whatsappNumber && <a className="btn btnOutline" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">Open WhatsApp ↗</a>}</div>{!contactEmail && !whatsappNumber && <small>Business contact details have not been configured yet. You can copy this enquiry for later.</small>}</div>}</div>;
}
