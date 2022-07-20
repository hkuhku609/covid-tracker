import React from 'react';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({
  selectedCountryInfo: { cases, deaths, recovered, updated },
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.updatedDiv}>
        Last Updated <h6>{updated}</h6>
      </div>
      <div className={styles.cards}>
        <div className={cx(styles.card, styles.cases)}>
          <h4>cases:</h4>
          <h1>
            <CountUp end={cases} duration={1} separator="," />
          </h1>
        </div>
        <div className={cx(styles.card, styles.deaths)}>
          <h4>deaths:</h4>
          <h1>
            <CountUp end={deaths} duration={1} separator="," />
          </h1>
        </div>
        <div className={cx(styles.card, styles.recovered)}>
          <h4>recovered:</h4>
          <h1>
            <CountUp end={recovered} duration={1} separator="," />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Cards;
