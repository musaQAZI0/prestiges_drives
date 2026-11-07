import type { Vehicle } from './data';

// Family-generation launch dates are editorial sorting hints, NOT rental-car
// model years. Sources and limitations are recorded in fleet-model-order.md.
const generationLaunch: Record<string, number> = {
  'audi-a6': 2025,
  'audi-a5': 2024,
  'mercedes-e300': 2023,
  'range-rover': 2022,
  'lexus-lx-600': 2022,
  'mercedes-c300': 2021,
  'toyota-lc-300': 2021,
  'audi-a3': 2020,
  'mercedes-s400': 2020,
  'mercedes-s500': 2020,
  'toyota-lc-200': 2007,
};

export function sortFleetByModel(vehicles: Vehicle[]): Vehicle[] {
  const brandOrder = (vehicle: Vehicle) => {
    if (vehicle.name.startsWith('Range Rover')) return 0;
    if (vehicle.name.startsWith('Lexus')) return 1;
    if (vehicle.name.startsWith('Toyota') || vehicle.name.startsWith('Land Cruiser')) return 2;
    return 3;
  };
  const year = (vehicle: Vehicle) => Number(vehicle.name.match(/\b(?:19|20)\d{2}\b/)?.[0] ?? generationLaunch[vehicle.slug] ?? 0);
  const previousGeneration: Record<string, string> = {
    'toyota-lc-300': 'toyota-lc-200',
  };
  // Requested brand sequence first, then known dates within each brand group.
  // Undated entries stay stable, with "New" ahead of other
  // undated entries. Never interpret A6, S500, etc. as dates.
  const sorted = [...vehicles].sort((a, b) => brandOrder(a) - brandOrder(b) || year(b) - year(a) || Number(/\bnew\b/i.test(b.name)) - Number(/\bnew\b/i.test(a.name)));
  // Keep known successor models ahead of their predecessors without assigning
  // unverified years to the individual rental vehicles.
  for (const [newer, older] of Object.entries(previousGeneration)) {
    const newerIndex = sorted.findIndex(vehicle => vehicle.slug === newer);
    const olderIndex = sorted.findIndex(vehicle => vehicle.slug === older);
    if (olderIndex >= 0 && newerIndex > olderIndex) {
      const [vehicle] = sorted.splice(newerIndex, 1);
      sorted.splice(olderIndex, 0, vehicle);
    }
  }
  return sorted;
}
