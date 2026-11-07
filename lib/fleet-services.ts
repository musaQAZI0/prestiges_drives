import type { Vehicle } from './data';

// Suggested vehicle types; specific arrangements are confirmed on enquiry.
export const fleetServices: { id: string; label: string; description: string; types: Vehicle['category'][]; vehicleSlugs?: string[] }[] = [
  { id: 'events', label: 'Wedding Events', description: 'Range Rover, Lexus LX, Mercedes-Benz and Audi for your special occasions.', types: ['SUV', 'Sedan'], vehicleSlugs: ['range-rover', 'lexus-lx-570', 'lexus-lx-600', 'mercedes-c300', 'mercedes-e300', 'mercedes-s400', 'mercedes-s500', 'audi-a3', 'audi-a5', 'audi-a6'] },
  { id: 'airport', label: 'Airport Transfers', description: 'Options for individual arrivals, family luggage and group transfers.', types: ['Sedan', 'SUV', 'MPV', 'Van'] },
  { id: 'corporate', label: 'Corporate Travel', description: 'Sedans, SUVs and group transport for meetings and business itineraries.', types: ['Sedan', 'SUV', 'Van', 'Bus'] },
  { id: 'private', label: 'Private Journeys', description: 'Explore vehicles for city visits, family outings and personal trips.', types: ['Hatchback', 'Sedan', 'SUV', 'MPV'] },
  { id: 'groups', label: 'Group Travel', description: 'Browse larger vehicle types for shared journeys and guest transport.', types: ['MPV', 'Van', 'Bus'] },
];
