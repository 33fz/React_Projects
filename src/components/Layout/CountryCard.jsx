import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <li className="country-card card  bg-blue-box">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt={name.common} title={name.common} />
        <div className="countryinfo">
          <p className="card-title">
            {name.common.length > 10
              ? name.common.slice(0, 9) + "..."
              : name.common}
          </p>
          <p className="card-description">
            Population : {population.toLocaleString()}
          </p>
          <p className="card-description">Region : {region}</p>
          <p className="card-description">Capital : {capital[0]} </p>
          <NavLink to={`/country/${name.common}`}>
            <button>
              Read More <FaLongArrowAltRight />
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
