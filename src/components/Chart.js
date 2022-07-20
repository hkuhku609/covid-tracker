import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(...registerables);

const Chart = ({ selectedCountryInfo: { cases, deaths, recovered } }) => {
  const getKeys = Object.keys({ cases, deaths, recovered });
  const getValues = Object.values({ cases, deaths, recovered });
  // useEffect(() => {
  //   const fetchCoins = async () => {
  //     await fetch(`${proxyUrl}${baseUrl}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'x-access-token': `${apiKey}`,
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     })
  //       .then((response) => {
  //         response.json().then((json) => {
  //           console.log(json);
  //           setChart(json.data);
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   fetchCoins();
  // }, [apiKey, proxyUrl, baseUrl]);

  let data = {
    labels: getKeys,
    datasets: [
      {
        // label: `${chart?.coins?.length} Coins Available`,
        data: getValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(75, 192, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  let options = {
    maintainAspectRatio: false,

    legend: { labels: { fontSize: 26 } },
  };
  return (
    <div>
      <Pie height={400} data={data} options={options} />
    </div>
  );
};

export default Chart;
