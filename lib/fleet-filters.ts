export function normalizeFleetCategory(value = ''): string {
  return ['', 'all', 'SUV', 'MPV', 'Sedan', 'Hatchback', 'Bus', 'Van'].includes(value) ? value : '';
}
