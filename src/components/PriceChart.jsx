import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const PriceChart = ({chartCryptoForNumberdays}) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
      setChartData(chartCryptoForNumberdays);
  }, [chartCryptoForNumberdays]);

  const data = {
    labels: ['','Jan', 'Feb', 'Mar', 'Apr', 'May',''],
    datasets: [
      {
        label: 'Price',
        data: chartData.map(pricePoint => pricePoint[1]),
        fill: false,
        borderColor: '#00C234',
        backgroundColor: '#00C234', 
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        textAlign: 'left'
      },
      title: {
        display: false,
        text: 'Monthly Average Price (USD)',
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: 'Date',
        },
        grid: {
          display: true,
          color: '#F3F4F6', 
          borderColor: '#F3F4F6'
        }
      },
      y: {
        display: true,
        title: {
          display: false,
          text: 'Price (USD)',
        },
        grid: {
          display: true,
          color: '#F3F4F6', 
          borderColor: '#F3F4F6'
        }
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 3,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}




