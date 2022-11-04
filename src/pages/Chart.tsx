import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export const options = {
  maintainAspectRatio: false,
  resizeDelay: 200,
  responsive: true,
  interaction: {
    // mode: 'index' as const,
    mode: 'nearest',
    intersect: false
  },

  scales: {
    x: {
      display: false,
      time: {
        // parser: 'MM-DD-YYYY',
        unit: 'month'
      }
    },
    y: {
      display: false,
      beginAtZero: true
    }
  },

  plugins: {
    legend: false,
    title: {
      display: false
    }
  }
}

const labels = [
  '2020.12',
  '2021.01',
  '2021.02',
  '2021.03',
  '2021.04',
  '2021.05',
  '2021.06',
  '2021.07',
  '2021.08',
  '2021.09',
  '2021.10',
  '2021.11',
  '2021.12',
  '2022.01',
  '2022.02',
  '2022.03',
  '2022.04'
]

const chartData = {
  labels,
  datasets: [
    // line 1
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      fill: true,
      backgroundColor: `rgba(239, 35, 60, 0.1)`,
      borderColor: `rgba(239, 35, 60, 1)`,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: `rgba(239, 35, 60, 1)`,
      clip: 20
    },
    // line 2
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 800 })),
      // fill: true,
      // backgroundColor: `rgba(252, 191, 73, 0.2)`,
      borderColor: `rgba(43, 45, 66, 0.2)`,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: `rgba(43, 45, 66, 1)`,
      clip: 20
    }
  ]
}

export function Chart() {
  return <Line options={options} data={chartData} />
}
