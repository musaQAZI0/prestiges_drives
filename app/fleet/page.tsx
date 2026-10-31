import FleetExplorer from '@/components/FleetExplorer';
import { vehicles } from '@/lib/data';

export default function FleetPage({ searchParams }: { searchParams: { category?: string; city?: string; pickup?: string; dropoff?: string } }) {
  return <section className="fleetPage" id="vehicles"><div className="container"><header className="fleetIntro"><span className="eyebrow dark">THE PRESTIGE COLLECTION</span><h1>Your journey.<br /><em>Your perfect drive.</em></h1><p>From compact city cars to SUVs and group transport. Find a vehicle for your journey.</p></header><FleetExplorer vehicles={vehicles} initialCategory={searchParams.category} city={searchParams.city} pickup={searchParams.pickup} dropoff={searchParams.dropoff} /><p className="fleetImageNote">AI-generated vehicle illustrations. Actual appearance is confirmed before booking. Model names and reference rates are sourced from isbrentacar.pk (1 November 2026). Availability, actual vehicle, pricing, and inclusions require confirmation.</p></div></section>;
}
