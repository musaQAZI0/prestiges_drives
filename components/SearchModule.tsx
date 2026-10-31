import { vehicleCategories } from '@/lib/data';

export default function SearchModule() {
  return <form className="searchModule" action="/fleet" method="get">
    <div className="searchIntro"><span className="eyebrow dark">Find your fit</span><h2>Where can we take you?</h2><p>Share a few details to start an availability enquiry.</p></div>
    <div className="searchFields"><label>Vehicle type<select name="category" defaultValue="all"><option value="all">All vehicles</option>{vehicleCategories.map(category => <option key={category} value={category}>{category}</option>)}</select></label><label>Pickup city<input name="city" placeholder="Enter a city" /></label><label>Pickup date<input name="pickup" type="date" /></label><label>Return date<input name="dropoff" type="date" /></label><button className="btn btnPrimary" type="submit">Explore vehicles →</button></div>
  </form>;
}
