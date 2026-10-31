export default function ContactChannels({ floating = false }: { floating?: boolean }) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '');
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  if (!number && !email) return null;
  if (floating) return number ? <a className="mobileContact" href={`https://wa.me/${number}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <span aria-hidden="true">&#8599;</span></a> : null;
  return <div className="contactChannels"><span className="eyebrow dark">PREFER A CONVERSATION?</span>{number && <a href={`https://wa.me/${number}`} target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">&#8599;</span></a>}{email && <a href={`mailto:${email}`}>Email us <span aria-hidden="true">&#8599;</span></a>}</div>;
}
