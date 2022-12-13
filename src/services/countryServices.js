export const getAllCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();
  const countriesFiltered = countries.filter(
    (country) => country.unMember == true
  );
  return countriesFiltered;
};
