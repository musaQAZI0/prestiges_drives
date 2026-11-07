import Image from 'next/image';
import Link from 'next/link';
import { vehicles } from '@/lib/data';

const picks = ['toyota-lc-200', 'range-rover', 'honda-civic'].map(slug => vehicles.find(vehicle => vehicle.slug === slug)!);
export default function HomeCollection() {
  return <section className="section homeCollection"><div className="container">
    <div className="collectionHeading"><div><span className="eyebrow dark">THE COLLECTION / 01</span><h2>Find your<br /><em>kind of drive.</em></h2></div><div><p>A city arrival. A change of scenery. An occasion to remember. Start with a car that suits your plans.</p><Link href="/fleet" className="textLink">Discover the full collection &rarr;</Link></div></div>
    <div className="collectionComposition">{picks.map((vehicle, index) => <article key={vehicle.slug} className={`collectionPick ${index === 0 ? 'collectionLead' : ''}`}>
      <Link className="collectionVisual" href={`/fleet/${vehicle.slug}`} aria-label={`Explore ${vehicle.name}`}><span className="collectionIndex" aria-hidden="true">0{index + 1}</span><Image src={vehicle.image} alt={`AI-generated illustration of ${vehicle.name}`} width={1200} height={800} sizes={index === 0 ? '(max-width: 800px) 100vw, 60vw' : '(max-width: 600px) 100vw, 40vw'} /></Link>
      <div className="collectionCaption"><div><span className="eyebrow dark">{vehicle.category} / {index === 0 ? 'IN THE SPOTLIGHT' : 'THE COLLECTION'}</span><h3><Link href={`/fleet/${vehicle.slug}`}>{vehicle.name}</Link></h3></div><Link href={`/fleet/${vehicle.slug}`} className="collectionArrow" aria-label={`View ${vehicle.name} details`}>&#8599;</Link></div>
    </article>)}</div><p className="collectionDisclosure">Vehicle illustrations. Actual appearance and availability are confirmed on enquiry.</p>
  </div></section>;
}
