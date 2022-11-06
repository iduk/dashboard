import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)
import DatagridTest from './DategridTest'
import { faker } from '@faker-js/faker'
import dataJson from './chart.json'
import ReactChart from './ReactChart'

export default function Home(): JSX.Element {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 500)
  // }, [])

  return (
    <>
      <div className="container">
        <h3 className={cx('title')}>Grid</h3>
        <ThemeWrap>
          <section className="mt-lg-3">
            <div className="row">
              <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                <div className="bg-primary h-100">column</div>
              </div>
              <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                <div className="bg-primary h-100">column</div>
              </div>
              <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                <div className="bg-primary h-100">column</div>
              </div>
              <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                <div className="bg-primary h-100">column</div>
              </div>
              <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                <div className="bg-primary h-100">column</div>
              </div>
              <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                <div className="bg-primary h-100">column</div>
              </div>
              <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                <div className="bg-primary h-100">column</div>
              </div>
              <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                <div className="bg-primary h-100">column</div>
              </div>
              <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                <div className="bg-primary h-100">column</div>
              </div>
              <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                <div className="bg-primary h-100">column</div>
              </div>
              <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                <div className="bg-primary h-100">column</div>
              </div>
              <div className="col-lg-1 col-md-3 col-sm-6 col-12">
                <div className="bg-primary h-100">column</div>
              </div>
            </div>
          </section>

          <section className="mt-3">
            <div className="row">
              <div className="col-lg-2 col-md-6 col-6">
                <div className="bg-primary h-100">
                  col-lg-2, col-md-6, col-6
                </div>
              </div>

              <div className="col-auto">
                <div className="bg-primary h-100">col-auto</div>
              </div>

              <div className="col-lg-4 col-md-6 col-6">
                <div className="bg-primary h-100">
                  col-lg-4, col-md-6, col-6
                </div>
              </div>
            </div>
          </section>
        </ThemeWrap>

        <div>
          <h3 className={cx('title')}>ChartJS</h3>
          <div className="row">
            <div className="col-lg-6 col-12">
              <section className={cx('card')}>
                <div className="p-3">
                  <small>Total Payments</small>
                  <h4 className="my-1">8,900</h4>
                </div>

                <div style={{ height: 200 }}>
                  <ReactChart
                    type="line"
                    options={options}
                    data={LineChartData}
                  />
                </div>
              </section>
            </div>
            <div className="col-lg-6 col-12">
              <section className={cx('card')}>
                <div className="p-3">
                  <small>Total Payments</small>
                  <h4 className="my-1">192,345</h4>
                </div>

                <div style={{ height: 200 }}>
                  <ReactChart
                    type="bar"
                    options={options}
                    data={BarChartData}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>

        <div>
          <h3 className={cx('title')}>mui DataGrid</h3>
          <DatagridTest />
        </div>
      </div>
    </>
  )
}

const options = {
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
      stacked: true,
      display: false,
      time: {
        // parser: 'MM-DD-YYYY',
        unit: 'month'
      }
    },
    y: {
      stacked: true,
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

// x,y array
const dataArray1 = dataJson.labels.map((label) => ({
  x: label,
  y: faker.datatype.number({ min: 100, max: 1000 })
}))
const dataArray2 = dataJson.labels.map((label) => ({
  x: label,
  y: faker.datatype.number({ min: 200, max: 1000 })
}))

const LineChartData = {
  datasets: [
    // line 1
    {
      data: dataArray1,
      fill: true,
      backgroundColor: `rgba(239, 35, 60, 0.2)`,
      borderColor: `rgba(239, 35, 60, 1)`,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: `rgba(239, 35, 60, 1)`
      // clip: 20
    },
    // line 2
    {
      data: dataArray2,
      fill: true,
      backgroundColor: `rgba(43, 45, 66, 0.04)`,
      borderColor: `rgba(43, 45, 66, 0.1)`,
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: `rgba(43, 45, 66, 1)`
      // clip: 20
    }
  ]
}

const BarChartData = {
  // labels: BarLabels,
  datasets: [
    {
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3
    },
    // line 1
    {
      data: dataArray1,
      backgroundColor: `rgba(239, 35, 60, 0.9)`,
      borderColor: `rgba(239, 35, 60, 1)`,
      borderWidth: 2
    },
    // line 2
    {
      data: dataArray2,
      backgroundColor: `rgba(43, 45, 66, 0.08)`,
      borderColor: `rgba(43, 45, 66, 0.2)`,
      borderWidth: 0
    }
  ]
}

const ThemeWrap = styled.div`
  padding: 2rem;
  /* background-color: var(--theme-bg); */
  color: var(--theme-text);
  border: 1px solid var(--theme-border);

  [class*='col'] {
    height: 50px;
  }
`
