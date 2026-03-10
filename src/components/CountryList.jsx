import CountryCard from "./CountryCard";

function CountryList({ countries }) {
return ( <div className="min-h-screen bg-gray-100 py-10 px-6">
  <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
    {countries.map((country) => (
      <CountryCard key={country.cca3} country={country} />
    ))}
  </div>

</div>

);
}

export default CountryList;
