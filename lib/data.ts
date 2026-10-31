export type Vehicle = { slug: string; name: string; category: 'SUV' | 'Sedan'; image: string; gallery: string[] };

export const vehicles: Vehicle[] = [
  { slug: 'toyota-land-cruiser', name: 'Toyota Land Cruiser', category: 'SUV', image: '/assets/fleet/generated/toyota-land-cruiser.jpg', gallery: ['/assets/fleet/generated/toyota-land-cruiser.jpg'] },
  { slug: 'toyota-prado', name: 'Toyota Prado', category: 'SUV', image: '/assets/fleet/generated/toyota-prado.jpg', gallery: ['/assets/fleet/generated/toyota-prado.jpg'] },
  { slug: 'range-rover', name: 'Range Rover', category: 'SUV', image: '/assets/fleet/generated/range-rover.jpg', gallery: ['/assets/fleet/generated/range-rover.jpg'] },
  { slug: 'kia-sportage', name: 'Kia Sportage', category: 'SUV', image: '/assets/fleet/generated/kia-sportage.jpg', gallery: ['/assets/fleet/generated/kia-sportage.jpg'] },
  { slug: 'honda-civic', name: 'Honda Civic', category: 'Sedan', image: '/assets/fleet/generated/honda-civic.jpg', gallery: ['/assets/fleet/generated/honda-civic.jpg'] },
  { slug: 'toyota-corolla', name: 'Toyota Corolla', category: 'Sedan', image: '/assets/fleet/generated/toyota-corolla.jpg', gallery: ['/assets/fleet/generated/toyota-corolla.jpg'] },
  { slug: 'hyundai-sonata', name: 'Hyundai Sonata', category: 'Sedan', image: '/assets/fleet/generated/hyundai-sonata.jpg', gallery: ['/assets/fleet/generated/hyundai-sonata.jpg'] },
  { slug: 'lexus-lx', name: 'Lexus LX', category: 'SUV', image: '/assets/fleet/generated/lexus-lx.jpg', gallery: ['/assets/fleet/generated/lexus-lx.jpg'] }
];

export const featuredVehicles = vehicles;

