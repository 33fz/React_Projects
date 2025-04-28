import countryFacts from "../api/countryData.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="about-title heading-title">
        Here are the Interesting Facts
        <br />
        we're proud of{" "}
      </h2>

      <div className="gardient-cards grid grid-three-cols">
        {countryFacts.map((country) => {
          const {
            id,
            countryName,
            capital,
            population,
            interestingFact,
            continentsName,
            countryFlag,
          } = country;
          return (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <div className="flag-image-div">
                  {/* <img
                    src={country.countryFlag}
                    alt={country.countryName}
                    width={200}
                    height={130}
                  /> */}
                </div>
                <p className="card-title">
                  Country Name:{" "}
                  <span className="country_name">{countryName}</span>
                </p>
                <p>
                  <span className="card-description">Captial: </span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                  {population}
                </p>
                <p>
                  <span className="card-description">Interesting Fact: </span>
                  {interestingFact}
                </p>
                <p>
                  <span className="card-description">Continent Name: </span>
                  {continentsName}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
