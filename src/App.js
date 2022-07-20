import React, { useEffect, useState } from 'react';
import styles from './App.module.css';

import Cards from './components/Cards';
import Chart from './components/Chart';

import { worldWideCountries } from './api';

import { NativeSelect, FormControl } from '@mui/material';

const App = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  const [selectedCountryInfo, SetSelectedCountryInfo] = useState({});

  useEffect(() => {
    const myCountries = async () => {
      const countries = await worldWideCountries();
      setFetchedCountries(countries);
      const ww = countries[0];
      SetSelectedCountryInfo(ww);
    };

    myCountries();
  }, []);

  const handleChange = (country) => {
    SetSelectedCountryInfo(
      fetchedCountries.find((item) => item.country === country)
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>COVID-19 TRACKER</h1>
      {/* {JSON.stringify(fetchedCountries)}
      {JSON.stringify(selectedCountryInfo)} */}

      <FormControl>
        <NativeSelect onChange={(e) => handleChange(e.target.value)}>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country.country}>
              {country.country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <Cards selectedCountryInfo={selectedCountryInfo} />
      <Chart selectedCountryInfo={selectedCountryInfo} />
    </div>
  );
};

export default App;
