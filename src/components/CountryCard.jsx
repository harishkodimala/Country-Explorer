function CountryCard({ country }) {
  return (
    <div className="group m-6 p-6 w-80 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">

      {/* Flag */}
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={country.flags.png}
          alt="flag"
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Country Name */}
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {country.name.common}
      </h3>

      {/* Info */}
      <div className="text-gray-600 space-y-2 text-sm">

        <p>
          <span className="font-semibold text-gray-800">Capital:</span>{" "}
          {country.capital?.[0] || "N/A"}
        </p>

        <p>
          <span className="font-semibold text-gray-800">Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>

        <p>
          <span className="font-semibold text-gray-800">Region:</span>{" "}
          {country.region}
        </p>

      </div>
    </div>
  );
}

export default CountryCard;