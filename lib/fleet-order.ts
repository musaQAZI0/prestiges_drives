import type { Vehicle } from './data';

// Only use years stated in the catalogue. A trim number is not a model year.
export function sortFleetByModel(vehicles: Vehicle[]): Vehicle[] {
  const year = (vehicle: Vehicle) => Number(vehicle.name.match(/\b(?:19|20)\d{2}\b/)?.[0] ?? 0);
  const previousGeneration: Record<string, string> = {
    'lexus-lx-600': 'lexus-lx-570',
    'toyota-lc-300': 'toyota-lc-200',
  };
  const sorted = [...vehicles].sort((a, b) => year(b) - year(a));
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
