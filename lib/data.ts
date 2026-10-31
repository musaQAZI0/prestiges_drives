export type Vehicle = { slug: string; name: string; category: 'SUV' | 'Sedan' | 'Hatchback' | 'MPV' | 'Pickup' | 'Van' | 'Bus'; referenceRate?: number | 'on-call'; image: string; gallery: string[] };

export const vehicles: Vehicle[] = [
  { slug: 'toyota-land-cruiser', name: 'Toyota Land Cruiser', category: 'SUV', image: '/assets/fleet/generated/toyota-land-cruiser.jpg', gallery: ['/assets/fleet/generated/toyota-land-cruiser.jpg'] },
  { slug: 'toyota-prado', name: 'Toyota Prado', category: 'SUV', image: '/assets/fleet/generated/toyota-prado.jpg', gallery: ['/assets/fleet/generated/toyota-prado.jpg'] },
  { slug: 'range-rover', name: 'Range Rover', category: 'SUV', image: '/assets/fleet/generated/range-rover.jpg', gallery: ['/assets/fleet/generated/range-rover.jpg'] },
  { slug: 'kia-sportage', name: 'Kia Sportage', category: 'SUV', image: '/assets/fleet/generated/kia-sportage.jpg', gallery: ['/assets/fleet/generated/kia-sportage.jpg'] },
  { slug: 'honda-civic', name: 'Honda Civic', category: 'Sedan', referenceRate: 12000, image: '/assets/fleet/generated/honda-civic.jpg', gallery: ['/assets/fleet/generated/honda-civic.jpg'] },
  { slug: 'toyota-corolla', name: 'Toyota Corolla', category: 'Sedan', image: '/assets/fleet/generated/toyota-corolla.jpg', gallery: ['/assets/fleet/generated/toyota-corolla.jpg'] },
  { slug: 'hyundai-sonata', name: 'Hyundai Sonata', category: 'Sedan', image: '/assets/fleet/generated/hyundai-sonata.jpg', gallery: ['/assets/fleet/generated/hyundai-sonata.jpg'] },
  { slug: 'lexus-lx', name: 'Lexus LX', category: 'SUV', image: '/assets/fleet/generated/lexus-lx.jpg', gallery: ['/assets/fleet/generated/lexus-lx.jpg'] },
  {"slug": "suzuki-alto", "name": "Suzuki Alto", "category": "Hatchback", "referenceRate": 4000, "image": "/assets/fleet/generated/suzuki-alto-studio.png", "gallery": ["/assets/fleet/generated/suzuki-alto-studio.png"]},
  {"slug": "suzuki-cultus", "name": "Suzuki Cultus", "category": "Hatchback", "referenceRate": 4500, "image": "/assets/fleet/generated/suzuki-cultus-studio.png", "gallery": ["/assets/fleet/generated/suzuki-cultus-studio.png"]},
  {"slug": "honda-city-new", "name": "Honda City New", "category": "Sedan", "referenceRate": 6000, "image": "/assets/fleet/generated/honda-city-new-studio.png", "gallery": ["/assets/fleet/generated/honda-city-new-studio.png"]},
  {"slug": "toyota-gli-2014", "name": "Toyota GLI 2014", "category": "Sedan", "referenceRate": 5000, "image": "/assets/fleet/generated/toyota-gli-2014-studio.png", "gallery": ["/assets/fleet/generated/toyota-gli-2014-studio.png"]},
  {"slug": "suzuki-apv", "name": "Suzuki APV", "category": "MPV", "referenceRate": 7000, "image": "/assets/fleet/generated/suzuki-apv-studio.png", "gallery": ["/assets/fleet/generated/suzuki-apv-studio.png"]},
  {"slug": "honda-brv-new-model", "name": "Honda BRV New Model", "category": "SUV", "referenceRate": 7000, "image": "/assets/fleet/generated/honda-brv-new-model-studio.png", "gallery": ["/assets/fleet/generated/honda-brv-new-model-studio.png"]},
  {"slug": "honda-brv-7-seater", "name": "Honda BRV 7 Seater", "category": "SUV", "referenceRate": 8000, "image": "/assets/fleet/generated/honda-brv-7-seater-studio.png", "gallery": ["/assets/fleet/generated/honda-brv-7-seater-studio.png"]},
  {"slug": "changan-karvaan", "name": "Changan Karvaan", "category": "Van", "referenceRate": 6000, "image": "/assets/fleet/generated/changan-karvaan-studio.png", "gallery": ["/assets/fleet/generated/changan-karvaan-studio.png"]},
  {"slug": "toyota-yaris", "name": "Toyota Yaris", "category": "Sedan", "referenceRate": 6000, "image": "/assets/fleet/generated/toyota-yaris-studio.png", "gallery": ["/assets/fleet/generated/toyota-yaris-studio.png"]},
  {"slug": "toyota-gli-2017", "name": "Toyota GLI 2017", "category": "Sedan", "referenceRate": 6000, "image": "/assets/fleet/generated/toyota-gli-2017-studio.png", "gallery": ["/assets/fleet/generated/toyota-gli-2017-studio.png"]},
  {"slug": "toyota-gli-2022", "name": "Toyota GLI 2022", "category": "Sedan", "referenceRate": 7000, "image": "/assets/fleet/generated/toyota-gli-2022-studio.png", "gallery": ["/assets/fleet/generated/toyota-gli-2022-studio.png"]},
  {"slug": "honda-civic-2018", "name": "Honda Civic 2018", "category": "Sedan", "referenceRate": 7000, "image": "/assets/fleet/generated/honda-civic-2018-studio.png", "gallery": ["/assets/fleet/generated/honda-civic-2018-studio.png"]},
  {"slug": "changan-oshan-x7", "name": "Changan Oshan X7", "category": "SUV", "referenceRate": 12000, "image": "/assets/fleet/generated/changan-oshan-x7-studio.png", "gallery": ["/assets/fleet/generated/changan-oshan-x7-studio.png"]},
  {"slug": "toyota-fortuner", "name": "Toyota Fortuner", "category": "SUV", "referenceRate": 15000, "image": "/assets/fleet/generated/toyota-fortuner-studio.png", "gallery": ["/assets/fleet/generated/toyota-fortuner-studio.png"]},
  {"slug": "toyota-vigo-2014-model", "name": "Toyota Vigo 2014 Model", "category": "Pickup", "referenceRate": 9000, "image": "/assets/fleet/generated/toyota-vigo-2014-model-studio.png", "gallery": ["/assets/fleet/generated/toyota-vigo-2014-model-studio.png"]},
  {"slug": "toyota-revo-new-model", "name": "Toyota Revo New Model", "category": "Pickup", "referenceRate": 12000, "image": "/assets/fleet/generated/toyota-revo-new-model-studio.png", "gallery": ["/assets/fleet/generated/toyota-revo-new-model-studio.png"]},
  {"slug": "land-cruiser-prado-2019", "name": "Land Cruiser Prado 2019", "category": "SUV", "referenceRate": 15000, "image": "/assets/fleet/generated/land-cruiser-prado-2019-studio.png", "gallery": ["/assets/fleet/generated/land-cruiser-prado-2019-studio.png"]},
  {"slug": "toyota-land-cruiser-v8", "name": "Toyota Land Cruiser V8", "category": "SUV", "referenceRate": 25000, "image": "/assets/fleet/generated/toyota-land-cruiser-v8-studio.png", "gallery": ["/assets/fleet/generated/toyota-land-cruiser-v8-studio.png"]},
  {"slug": "toyota-hiace-200", "name": "Toyota Hiace 200", "category": "Van", "referenceRate": 8000, "image": "/assets/fleet/generated/toyota-hiace-200-studio.png", "gallery": ["/assets/fleet/generated/toyota-hiace-200-studio.png"]},
  {"slug": "toyota-hiace-214", "name": "Toyota Hiace 214", "category": "Van", "referenceRate": 9000, "image": "/assets/fleet/generated/toyota-hiace-214-studio.png", "gallery": ["/assets/fleet/generated/toyota-hiace-214-studio.png"]},
  {"slug": "toyota-grand-cabin-224", "name": "Toyota Grand Cabin 224", "category": "Van", "referenceRate": 10000, "image": "/assets/fleet/generated/toyota-grand-cabin-224-studio.png", "gallery": ["/assets/fleet/generated/toyota-grand-cabin-224-studio.png"]},
  {"slug": "toyota-coaster-4c-saloon", "name": "Toyota Coaster 4C Saloon", "category": "Bus", "referenceRate": 15000, "image": "/assets/fleet/generated/toyota-coaster-4c-saloon-studio.png", "gallery": ["/assets/fleet/generated/toyota-coaster-4c-saloon-studio.png"]},
  {"slug": "toyota-coaster-5c-saloon", "name": "Toyota Coaster 5C Saloon", "category": "Bus", "referenceRate": 18000, "image": "/assets/fleet/generated/toyota-coaster-5c-saloon-studio.png", "gallery": ["/assets/fleet/generated/toyota-coaster-5c-saloon-studio.png"]},
  {"slug": "mercedes-c300", "name": "Mercedes C300", "category": "Sedan", "referenceRate": "on-call", "image": "/assets/fleet/generated/mercedes-c300-studio.png", "gallery": ["/assets/fleet/generated/mercedes-c300-studio.png"]},
  {"slug": "mercedes-e300", "name": "Mercedes E300", "category": "Sedan", "referenceRate": "on-call", "image": "/assets/fleet/generated/mercedes-e300-studio.png", "gallery": ["/assets/fleet/generated/mercedes-e300-studio.png"]},
  {"slug": "mercedes-s400", "name": "Mercedes S400", "category": "Sedan", "referenceRate": "on-call", "image": "/assets/fleet/generated/mercedes-s400-studio.png", "gallery": ["/assets/fleet/generated/mercedes-s400-studio.png"]},
  {"slug": "mercedes-s500", "name": "Mercedes S500", "category": "Sedan", "referenceRate": "on-call", "image": "/assets/fleet/generated/mercedes-s500-studio.png", "gallery": ["/assets/fleet/generated/mercedes-s500-studio.png"]},
  {"slug": "range-rover-velar", "name": "Range Rover Velar", "category": "SUV", "referenceRate": "on-call", "image": "/assets/fleet/generated/range-rover-velar-studio.png", "gallery": ["/assets/fleet/generated/range-rover-velar-studio.png"]},
  {"slug": "range-rover-sv-coup", "name": "Range Rover SV Coupe", "category": "SUV", "referenceRate": "on-call", "image": "/assets/fleet/generated/range-rover-sv-coup-studio.png", "gallery": ["/assets/fleet/generated/range-rover-sv-coup-studio.png"]},
  {"slug": "range-rover-evoque", "name": "Range Rover Evoque", "category": "SUV", "referenceRate": "on-call", "image": "/assets/fleet/generated/range-rover-evoque-studio.png", "gallery": ["/assets/fleet/generated/range-rover-evoque-studio.png"]},
  {"slug": "audi-a3", "name": "Audi A3", "category": "Sedan", "referenceRate": 30000, "image": "/assets/fleet/generated/audi-a3-studio.png", "gallery": ["/assets/fleet/generated/audi-a3-studio.png"]},
  {"slug": "audi-a4", "name": "Audi A4", "category": "Sedan", "referenceRate": 40000, "image": "/assets/fleet/generated/audi-a4-studio.png", "gallery": ["/assets/fleet/generated/audi-a4-studio.png"]},
  {"slug": "audi-a5", "name": "Audi A5", "category": "Sedan", "referenceRate": 50000, "image": "/assets/fleet/generated/audi-a5-studio.png", "gallery": ["/assets/fleet/generated/audi-a5-studio.png"]},
  {"slug": "audi-a6", "name": "Audi A6", "category": "Sedan", "referenceRate": 60000, "image": "/assets/fleet/generated/audi-a6-studio.png", "gallery": ["/assets/fleet/generated/audi-a6-studio.png"]}
];

export const featuredVehicles = vehicles;


export const vehicleCategories = ['SUV', 'Sedan', 'Hatchback', 'MPV', 'Pickup', 'Van', 'Bus'] as const;
export function rateLabel(vehicle: Vehicle) { return typeof vehicle.referenceRate === 'number' ? `PKR ${vehicle.referenceRate.toLocaleString('en-PK')} / day` : vehicle.referenceRate === 'on-call' ? 'Price on enquiry' : 'Request a tailored quote'; }
