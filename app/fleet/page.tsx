import FleetExplorer from '@/components/FleetExplorer';
import { vehicles } from '@/lib/data';

export default function FleetPage({ searchParams }: { searchParams: { category?: string; city?: string; pickup?: string; dropoff?: string } }) {
  return <section className="fleetPage" id="vehicles"><div className="container"><header className="fleetIntro"><span className="eyebrow dark">THE PRESTIGE COLLECTION</span><h1>Your journey.<br /><em>Your perfect drive.</em></h1><p>Exceptional SUVs. Refined sedans. Find the car that feels right for you.</p></header><FleetExplorer vehicles={vehicles} initialCategory={searchParams.category} city={searchParams.city} pickup={searchParams.pickup} dropoff={searchParams.dropoff} /><p className="fleetImageNote">AI-generated vehicle illustrations. Actual appearance and availability are confirmed on enquiry.</p></div></section>;
}
