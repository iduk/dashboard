import React from 'react'
import {
  Chart as ChartJS,
  ChartOptions,
  ChartData,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export const options = {
  plugins: {
    legend: false,
    title: {
      display: false
    }
  },
  maintainAspectRatio: false,
  responsive: true,

  scales: {
    x: {
      stacked: true,
      display: false
    },
    y: {
      stacked: true,
      display: false,
      beginAtZero: true
    }
  }
}

interface Props {
  options?: ChartOptions
  data: ChartData
  type: string
}

export default function ReactChart(props: any, {}: Props) {
  const { options, data, type } = props
  return <Chart type={type} options={options} data={data} />
}
