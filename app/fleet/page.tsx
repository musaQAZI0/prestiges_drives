import FleetExplorer from '@/components/FleetExplorer';
import { vehicles } from '@/lib/data';

export default function FleetPage({ searchParams }: { searchParams: { category?: string; city?: string; pickup?: string; dropoff?: string } }) {
  return <section className="fleetPage premiumServices premiumFleet" id="vehicles"><div className="servicesFlow" aria-hidden="true" /><div className="container premiumServicesInner"><header className="fleetIntro premiumServicesIntro"><span className="eyebrow dark">FEATURED FLEET</span><h1>Choose Your <span>Next Ride</span></h1><div className="servicesGoldRule" /><p>From compact city cars to SUVs and group transport. Find a vehicle for your journey.</p></header><FleetExplorer vehicles={vehicles} initialCategory={searchParams.category} city={searchParams.city} pickup={searchParams.pickup} dropoff={searchParams.dropoff} /><p className="fleetImageNote">Actual model year, trim and appearance are confirmed before booking. Model names and reference rates are sourced from isbrentacar.pk (1 November 2026). Availability, actual vehicle, pricing, and inclusions require confirmation.</p></div></section>;
}
