import axios from 'axios';
const url = 'https://disease.sh/v3/covid-19/';

export const worldWideCountries = async () => {
  try {
    //get countries
    const { data: countries } = await axios.get(`${url}countries`);
    const countriesArray = countries.map((country) => {
      return {
        country: country.country,
        cases: country.cases,
        deaths: country.deaths,
        recovered: country.recovered,
        updated: new Date(country.updated).toUTCString(),
      };
    });

    //get worldwide
    const {
      data: { cases, deaths, recovered, updated },
    } = await axios.get(`${url}all`);
    countriesArray.unshift({
      country: 'Worldwide',
      cases,
      deaths,
      recovered,
      updated: new Date(updated).toUTCString(),
    });

    return countriesArray;
  } catch (error) {}
};

// export const fetchWorldWide = async () => {
//   try {
//     const yyy = [];
//     const {
//       data: { cases, deaths, recovered, updated },
//     } = await axios.get(`${url}all`);
//     return yyy.push({
//       country: 'Worldwide',
//       cases,
//       deaths,
//       recovered,
//       updated: new Date(updated).toUTCString(),
//     });
//   } catch (error) {}
// };

// export const fetchCountries = async () => {
//   try {
//     const { data: countries } = await axios.get(`${url}countries`);
//     return countries.map((country) => {
//       return {
//         country: country.country,
//         cases: country.cases,
//         deaths: country.deaths,
//         recovered: country.recovered,
//         updated: new Date(country.updated).toUTCString(),
//       };
//     });
//   } catch (error) {}
// };
