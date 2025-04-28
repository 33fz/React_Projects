import { useEffect, useState, useTransition } from "react";

import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      //console.log(res);
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;
  console.log(search, filter);

  // here is the main logic for search

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // here is the main logic for search

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <div className="container">
        <ul className="grid grid-country-column">
          {filterCountries.map((curCountry, index) => {
            return <CountryCard country={curCountry} key={index} />;
          })}
        </ul>
      </div>
    </section>
  );

  // <h1>Country Page</h1>;
};
