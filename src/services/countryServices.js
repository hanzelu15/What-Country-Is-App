export const getAllCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,unMember,translations,flags,capital,languages,population");
  const countries = await response.json();
  const countriesFiltered = countries.filter(
    (country) => country.unMember == true
  );
  return countriesFiltered;
};

export const getCountryByName = async (text) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${text}?fields=name,capital,continents,languages,flags,population`);
    if(response.status == 404)
      return [];
    const countries = await response.json();
    return countries;
  } catch (error) {
    return [];
  }
};
