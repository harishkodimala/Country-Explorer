import { useState, useEffect, useMemo } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {
const [countries, setCountries] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const [query, setQuery] = useState("");

useEffect(() => {
async function fetchCountries() {
setLoading(true);
setError(null);

 try {

const res = await fetch(
"https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
);

if (!res.ok) throw new Error("Failed to fetch");

const data = await res.json();

if (!data || data.length === 0) {
throw new Error("No data received");
}

setCountries(data);
} catch (err) {
setError(err.message || "Something went wrong");
} finally {
setLoading(false);
}
}


fetchCountries();

}, []);

const filteredCountries = useMemo(() => {
return countries.filter((country) =>
country.name?.common?.toLowerCase().includes(query.toLowerCase())
);
}, [countries, query]);

return ( <div className="min-h-screen flex flex-col items-center gap-10 p-10 bg-linear-to-br from-blue-50 via-white to-gray-100">
  <h1 className="text-center text-4xl md:text-5xl font-bold bg-white shadow-lg p-6 rounded-2xl max-w-xl w-full border border-gray-200">
    🌍 Country Explorer
  </h1>

  <SearchBar setQuery={setQuery} />
{loading ? (

  <p className="text-lg font-semibold text-blue-600 animate-pulse">
    Loading countries...
  </p>
) : error ? (
  <p className="text-red-500 font-semibold bg-red-50 border border-red-200 px-6 py-3 rounded-lg shadow-sm">
    {error}
  </p>
) : filteredCountries.length === 0 && query ? (
  <p className="text-xl font-semibold text-red-500 text-center mt-10 bg-white px-6 py-4 rounded-lg shadow">
     No countries found for "{query}"
  </p>
) : (
  <CountryList countries={filteredCountries} />
)}

</div>


);
}

export default App;
