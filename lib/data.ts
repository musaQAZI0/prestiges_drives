export type Vehicle = { slug: string; name: string; category: 'SUV' | 'Sedan' | 'Hatchback' | 'MPV' | 'Pickup' | 'Van' | 'Bus'; referenceRate?: number | 'on-call'; image: string; gallery: string[] };

const existingVehicles: Vehicle[] = [
  { slug: 'suzuki-swift', name: 'Suzuki Swift', category: 'Hatchback', image: '', gallery: [] },
  { slug: 'suzuki-wagon-r', name: 'Suzuki Wagon R', category: 'Hatchback', image: '', gallery: [] },
  { slug: 'suzuki-alto-japanese', name: 'Suzuki Alto (Japanese)', category: 'Hatchback', image: '', gallery: [] },
  { slug: 'lexus-lx-570', name: 'Lexus LX 570', category: 'SUV', image: '', gallery: [] },
  { slug: 'toyota-prado-tx', name: 'Toyota Prado TX', category: 'SUV', image: '', gallery: [] },
  { slug: 'toyota-prado-txl', name: 'Toyota Prado TXL', category: 'SUV', image: '', gallery: [] },
  { slug: 'toyota-hilux-revo-rocco', name: 'Toyota Hilux Revo Rocco', category: 'Pickup', image: '', gallery: [] },
  { slug: 'mg-hs', name: 'MG HS', category: 'SUV', image: '', gallery: [] },
  { slug: 'hyundai-tucson', name: 'Hyundai Tucson', category: 'SUV', image: '', gallery: [] },
  { slug: 'lexus-lx-600', name: 'Lexus LX 600', category: 'SUV', image: '', gallery: [] },
  { slug: 'toyota-lc-200', name: 'Toyota LC 200', category: 'SUV', image: '/assets/optimized/fleet/generated/toyota-land-cruiser.webp', gallery: ['/assets/optimized/fleet/generated/toyota-land-cruiser.webp'] },
  { slug: 'toyota-lc-300', name: 'Toyota LC 300', category: 'SUV', image: '', gallery: [] },
  { slug: 'toyota-prado', name: 'Toyota Prado', category: 'SUV', image: '/assets/optimized/fleet/generated/toyota-prado.webp', gallery: ['/assets/optimized/fleet/generated/toyota-prado.webp'] },
  { slug: 'range-rover', name: 'Range Rover', category: 'SUV', image: '/assets/optimized/fleet/generated/range-rover.webp', gallery: ['/assets/optimized/fleet/generated/range-rover.webp'] },
  { slug: 'kia-sportage', name: 'Kia Sportage', category: 'SUV', image: '/assets/optimized/fleet/generated/kia-sportage.webp', gallery: ['/assets/optimized/fleet/generated/kia-sportage.webp'] },
  { slug: 'honda-civic', name: 'Honda Civic', category: 'Sedan', referenceRate: 12000, image: '/assets/optimized/fleet/generated/honda-civic.webp', gallery: ['/assets/optimized/fleet/generated/honda-civic.webp'] },
  { slug: 'toyota-corolla', name: 'Toyota Corolla', category: 'Sedan', image: '/assets/optimized/fleet/generated/toyota-corolla.webp', gallery: ['/assets/optimized/fleet/generated/toyota-corolla.webp'] },
  { slug: 'hyundai-sonata', name: 'Hyundai Sonata', category: 'Sedan', image: '/assets/optimized/fleet/generated/hyundai-sonata.webp', gallery: ['/assets/optimized/fleet/generated/hyundai-sonata.webp'] },
  { slug: 'lexus-lx', name: 'Lexus LX', category: 'SUV', image: '/assets/optimized/fleet/generated/lexus-lx.webp', gallery: ['/assets/optimized/fleet/generated/lexus-lx.webp'] },
  {"slug": "suzuki-alto", "name": "Suzuki Alto (Pakistani)", "category": "Hatchback", "referenceRate": 4000, "image": "/assets/optimized/fleet/generated/suzuki-alto-studio.webp", "gallery": ["/assets/optimized/fleet/generated/suzuki-alto-studio.webp"]},
  {"slug": "suzuki-cultus", "name": "Suzuki Cultus", "category": "Hatchback", "referenceRate": 4500, "image": "/assets/optimized/fleet/generated/suzuki-cultus-studio.webp", "gallery": ["/assets/optimized/fleet/generated/suzuki-cultus-studio.webp"]},
  {"slug": "honda-city-new", "name": "Honda City New", "category": "Sedan", "referenceRate": 6000, "image": "/assets/optimized/fleet/generated/honda-city-new-studio.webp", "gallery": ["/assets/optimized/fleet/generated/honda-city-new-studio.webp"]},
  {"slug": "toyota-gli-2014", "name": "Toyota GLI 2014", "category": "Sedan", "referenceRate": 5000, "image": "/assets/optimized/fleet/generated/toyota-gli-2014-studio.webp", "gallery": ["/assets/optimized/fleet/generated/toyota-gli-2014-studio.webp"]},
  {"slug": "suzuki-apv", "name": "Suzuki APV", "category": "MPV", "referenceRate": 7000, "image": "/assets/optimized/fleet/generated/suzuki-apv-studio.webp", "gallery": ["/assets/optimized/fleet/generated/suzuki-apv-studio.webp"]},
  {"slug": "honda-brv-new-model", "name": "Honda BRV New Model", "category": "SUV", "referenceRate": 7000, "image": "/assets/optimized/fleet/generated/honda-brv-new-model-studio.webp", "gallery": ["/assets/optimized/fleet/generated/honda-brv-new-model-studio.webp"]},
  {"slug": "honda-brv-7-seater", "name": "Honda BRV 7 Seater", "category": "SUV", "referenceRate": 8000, "image": "/assets/optimized/fleet/generated/honda-brv-7-seater-studio.webp", "gallery": ["/assets/optimized/fleet/generated/honda-brv-7-seater-studio.webp"]},
  {"slug": "changan-karvaan", "name": "Changan Karvaan", "category": "MPV", "referenceRate": 6000, "image": "/assets/optimized/fleet/generated/changan-karvaan-studio.webp", "gallery": ["/assets/optimized/fleet/generated/changan-karvaan-studio.webp"]},
  {"slug": "toyota-yaris", "name": "Toyota Yaris", "category": "Sedan", "referenceRate": 6000, "image": "/assets/optimized/fleet/generated/toyota-yaris-studio.webp", "gallery": ["/assets/optimized/fleet/generated/toyota-yaris-studio.webp"]},
  {"slug": "toyota-gli-2017", "name": "Toyota GLI 2017", "category": "Sedan", "referenceRate": 6000, "image": "/assets/optimized/fleet/generated/toyota-gli-2017-studio.webp", "gallery": ["/assets/optimized/fleet/generated/toyota-gli-2017-studio.webp"]},
  {"slug": "toyota-gli-2022", "name": "Toyota GLI 2022", "category": "Sedan", "referenceRate": 7000, "image": "/assets/optimized/fleet/generated/toyota-gli-2022-studio.webp", "gallery": ["/assets/optimized/fleet/generated/toyota-gli-2022-studio.webp"]},
  {"slug": "honda-civic-2018", "name": "Honda Civic 2018", "category": "Sedan", "referenceRate": 7000, "image": "/assets/optimized/fleet/generated/honda-civic-2018-studio.webp", "gallery": ["/assets/optimized/fleet/generated/honda-civic-2018-studio.webp"]},
  {"slug": "changan-oshan-x7", "name": "Changan Oshan X7", "category": "SUV", "referenceRate": 12000, "image": "/assets/optimized/fleet/generated/changan-oshan-x7-studio.webp", "gallery": ["/assets/optimized/fleet/generated/changan-oshan-x7-studio.webp"]},
  {"slug": "toyota-fortuner", "name": "Toyota Fortuner", "category": "SUV", "referenceRate": 15000, "image": "/assets/optimized/fleet/generated/toyota-fortuner-studio.webp", "gallery": ["/assets/optimized/fleet/generated/toyota-fortuner-studio.webp"]},
  {"slug": "toyota-vigo-2014-model", "name": "Toyota Vigo 2014 Model", "category": "Pickup", "referenceRate": 9000, "image": "/assets/optimized/fleet/generated/toyota-vigo-2014-model-studio.webp", "gallery": ["/assets/optimized/fleet/generated/toyota-vigo-2014-model-studio.webp"]},
  {"slug": "toyota-revo-new-model", "name": "Toyota Revo New Model", "category": "Pickup", "referenceRate": 12000, "image": "/assets/optimized/fleet/generated/toyota-revo-new-model-studio.webp", "gallery": ["/assets/optimized/fleet/generated/toyota-revo-new-model-studio.webp"]},
  {"slug": "land-cruiser-prado-2019", "name": "Land Cruiser Prado 2019", "category": "SUV", "referenceRate": 15000, "image": "/assets/optimized/fleet/generated/land-cruiser-prado-2019-studio.webp", "gallery": ["/assets/optimized/fleet/generated/land-cruiser-prado-2019-studio.webp"]},
  {"slug": "toyota-land-cruiser-v8", "name": "Toyota Land Cruiser V8", "category": "SUV", "referenceRate": 25000, "image": "/assets/optimized/fleet/generated/toyota-land-cruiser-v8-studio.webp", "gallery": ["/assets/optimized/fleet/generated/toyota-land-cruiser-v8-studio.webp"]},
  {"slug": "toyota-hiace-200", "name": "Toyota Hiace 200", "category": "Van", "referenceRate": 8000, "image": "/assets/optimized/fleet/generated/toyota-hiace-200-studio.webp", "gallery": ["/assets/optimized/fleet/generated/toyota-hiace-200-studio.webp"]},
  {"slug": "toyota-hiace-214", "name": "Toyota Hiace 214", "category": "Van", "referenceRate": 9000, "image": "/assets/optimized/fleet/generated/toyota-hiace-214-studio.webp", "gallery": ["/assets/optimized/fleet/generated/toyota-hiace-214-studio.webp"]},
  {"slug": "toyota-grand-cabin-224", "name": "Toyota Grand Cabin 224", "category": "Van", "referenceRate": 10000, "image": "/assets/optimized/fleet/generated/toyota-grand-cabin-224-studio.webp", "gallery": ["/assets/optimized/fleet/generated/toyota-grand-cabin-224-studio.webp"]},
  {"slug": "toyota-coaster-4c-saloon", "name": "Toyota Coaster 4C Saloon", "category": "Bus", "referenceRate": 15000, "image": "/assets/optimized/fleet/generated/toyota-coaster-4c-saloon-studio.webp", "gallery": ["/assets/optimized/fleet/generated/toyota-coaster-4c-saloon-studio.webp"]},
  {"slug": "toyota-coaster-5c-saloon", "name": "Toyota Coaster 5C Saloon", "category": "Bus", "referenceRate": 18000, "image": "/assets/optimized/fleet/generated/toyota-coaster-5c-saloon-studio.webp", "gallery": ["/assets/optimized/fleet/generated/toyota-coaster-5c-saloon-studio.webp"]},
  {"slug": "mercedes-c300", "name": "Mercedes C300", "category": "Sedan", "referenceRate": "on-call", "image": "/assets/optimized/fleet/generated/mercedes-c300-studio.webp", "gallery": ["/assets/optimized/fleet/generated/mercedes-c300-studio.webp"]},
  {"slug": "mercedes-e300", "name": "Mercedes E300", "category": "Sedan", "referenceRate": "on-call", "image": "/assets/optimized/fleet/generated/mercedes-e300-studio.webp", "gallery": ["/assets/optimized/fleet/generated/mercedes-e300-studio.webp"]},
  {"slug": "mercedes-s400", "name": "Mercedes S400", "category": "Sedan", "referenceRate": "on-call", "image": "/assets/optimized/fleet/generated/mercedes-s400-studio.webp", "gallery": ["/assets/optimized/fleet/generated/mercedes-s400-studio.webp"]},
  {"slug": "mercedes-s500", "name": "Mercedes S500", "category": "Sedan", "referenceRate": "on-call", "image": "/assets/optimized/fleet/generated/mercedes-s500-studio.webp", "gallery": ["/assets/optimized/fleet/generated/mercedes-s500-studio.webp"]},
  {"slug": "range-rover-velar", "name": "Range Rover Velar", "category": "SUV", "referenceRate": "on-call", "image": "/assets/optimized/fleet/generated/range-rover-velar-studio.webp", "gallery": ["/assets/optimized/fleet/generated/range-rover-velar-studio.webp"]},
  {"slug": "range-rover-sv-coup", "name": "Range Rover SV Coupe", "category": "SUV", "referenceRate": "on-call", "image": "/assets/optimized/fleet/generated/range-rover-sv-coup-studio.webp", "gallery": ["/assets/optimized/fleet/generated/range-rover-sv-coup-studio.webp"]},
  {"slug": "range-rover-evoque", "name": "Range Rover Evoque", "category": "SUV", "referenceRate": "on-call", "image": "/assets/optimized/fleet/generated/range-rover-evoque-studio.webp", "gallery": ["/assets/optimized/fleet/generated/range-rover-evoque-studio.webp"]},
  {"slug": "audi-a3", "name": "Audi A3", "category": "Sedan", "referenceRate": 30000, "image": "/assets/optimized/fleet/generated/audi-a3-studio.webp", "gallery": ["/assets/optimized/fleet/generated/audi-a3-studio.webp"]},
  {"slug": "audi-a4", "name": "Audi A4", "category": "Sedan", "referenceRate": 40000, "image": "/assets/optimized/fleet/generated/audi-a4-studio.webp", "gallery": ["/assets/optimized/fleet/generated/audi-a4-studio.webp"]},
  {"slug": "audi-a5", "name": "Audi A5", "category": "Sedan", "referenceRate": 50000, "image": "/assets/optimized/fleet/generated/audi-a5-studio.webp", "gallery": ["/assets/optimized/fleet/generated/audi-a5-studio.webp"]},
  {"slug": "audi-a6", "name": "Audi A6", "category": "Sedan", "referenceRate": 60000, "image": "/assets/optimized/fleet/generated/audi-a6-studio.webp", "gallery": ["/assets/optimized/fleet/generated/audi-a6-studio.webp"]}
];

// Fleet catalogue order follows the owner's requested browsing sequence.
function fleetVehicle(slug: string, name: string, category: Vehicle['category'], imageFrom?: string): Vehicle {
  const source = existingVehicles.find(vehicle => vehicle.slug === (imageFrom ?? slug));
  return { slug, name, category, image: source?.image ?? '', gallery: source?.gallery ?? [] };
}

export const vehicles: Vehicle[] = [
  fleetVehicle('lexus-lx-600', 'Lexus LX 600', 'SUV'),
  fleetVehicle('lexus-lx-570', 'Lexus LX 570', 'SUV'),
  fleetVehicle('toyota-lc-300', 'Toyota LC 300', 'SUV'),
  fleetVehicle('toyota-lc-200', 'Toyota LC 200', 'SUV'),
  fleetVehicle('toyota-prado-txl', 'Toyota Prado TXL', 'SUV'),
  fleetVehicle('toyota-prado-tx', 'Toyota Prado TX', 'SUV'),
  fleetVehicle('toyota-fortuner-gr', 'Toyota Fortuner GR', 'SUV'),
  fleetVehicle('toyota-fortuner-sigma', 'Toyota Fortuner Sigma', 'SUV'),
  fleetVehicle('toyota-hilux-revo-rocco', 'Toyota Hilux Revo Rocco', 'SUV'),
  fleetVehicle('toyota-revo-new-model', 'Toyota Hilux Revo', 'SUV'),
  fleetVehicle('honda-brv-new-model', 'Honda BR-V', 'MPV'),
  fleetVehicle('kia-sportage', 'Kia Sportage', 'MPV'),
  fleetVehicle('kia-sportage-hybrid', 'Kia Sportage Facelift Hybrid', 'MPV'),
  fleetVehicle('mg-hs-hybrid', 'MG HS Hybrid', 'MPV'),
  fleetVehicle('mg-hs', 'MG HS', 'MPV'),
  fleetVehicle('hyundai-tucson', 'Hyundai Tucson', 'MPV'),
  fleetVehicle('honda-civic-11th-gen', 'Honda Civic 11th Generation', 'Sedan'),
  fleetVehicle('honda-civic-10th-gen', 'Honda Civic X (10th Generation)', 'Sedan'),
  fleetVehicle('toyota-corolla-grande', 'Toyota Corolla Grande', 'Sedan'),
  fleetVehicle('toyota-corolla-altis-16', 'Toyota Corolla Altis 1.6', 'Sedan'),
  fleetVehicle('toyota-yaris', 'Toyota Yaris', 'Sedan'),
  fleetVehicle('toyota-gli', 'Toyota GLI', 'Sedan'),
  fleetVehicle('suzuki-swift', 'Suzuki Swift GLX', 'Hatchback'),
  fleetVehicle('suzuki-cultus', 'Suzuki Cultus', 'Hatchback'),
  fleetVehicle('suzuki-wagon-r', 'Suzuki Wagon R', 'Hatchback'),
  fleetVehicle('suzuki-alto-japanese', 'Suzuki Alto (Japanese)', 'Hatchback'),
  fleetVehicle('suzuki-alto', 'Suzuki Alto (Pakistani)', 'Hatchback'),
  fleetVehicle('toyota-coaster', 'Toyota Coaster', 'Bus', 'toyota-coaster-5c-saloon'),
  fleetVehicle('toyota-hiace-standard-roof', 'Toyota Hiace Standard Roof', 'Van'),
  fleetVehicle('toyota-hiace-high-roof', 'Toyota Hiace High Roof', 'Van'),
  fleetVehicle('toyota-grand-cabin-224', 'Toyota Hiace Grand Cabin', 'Van'),
];

// Preserve the separate service catalogue, including the wedding collection.
export const serviceVehicles: Vehicle[] = [
  ...vehicles,
  ...existingVehicles.filter(vehicle => ['range-rover', 'mercedes-c300', 'mercedes-e300', 'mercedes-s400', 'mercedes-s500', 'audi-a3', 'audi-a5', 'audi-a6'].includes(vehicle.slug)),
];
export const featuredVehicles = vehicles;


export const vehicleCategories = ['SUV', 'MPV', 'Sedan', 'Hatchback', 'Bus', 'Van'] as const;
export function rateLabel(vehicle: Vehicle) { return typeof vehicle.referenceRate === 'number' ? `PKR ${vehicle.referenceRate.toLocaleString('en-PK')} / day` : vehicle.referenceRate === 'on-call' ? 'Price on enquiry' : 'Request a tailored quote'; }
