import React, { useState, useEffect } from 'react'
import Loading from '@/components/Loading'
import styled from '@emotion/styled'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'
import DatagridTest from './DategridTest'
const cx = classnames.bind(styles)

const ThemeWrap = styled.div`
  padding: 2rem;
  /* background-color: var(--theme-bg); */
  color: var(--theme-text);
  border: 1px solid var(--theme-border);

  [class*='col'] {
    height: 50px;
  }
`

export function Home(): JSX.Element {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className="container">
          <ThemeWrap>
            <h6>Theme Mode</h6>
            <section className="p-4 mt-lg-3 bg-gray-3">
              <div className="row">
                <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                  1
                </span>
                <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-7">
                  2
                </span>
                <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                  3
                </span>
                <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-7">
                  4
                </span>
                <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                  5
                </span>
                <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-7">
                  6
                </span>
                <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                  7
                </span>
                <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-7">
                  8
                </span>
                <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                  9
                </span>
                <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-7">
                  10
                </span>
                <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-6">
                  11
                </span>
                <span className="col-lg-1 col-md-3 col-sm-6 col-12 bg-gray-7">
                  12
                </span>
              </div>
            </section>

            <section className="p-4 mt-3">
              <div className="row">
                <span className="col-lg-3 col-md-6 col-6 bg-gray-3">1</span>
                <span className="col-lg-3 col-md-6 col-6 bg-gray-4">2</span>
                <span className="col-lg-3 col-md-6 col-6 bg-gray-5">3</span>
                <span className="col-lg-3 col-md-6 col-6 bg-gray-6">4</span>
              </div>
            </section>
          </ThemeWrap>

          <div>
            <h4>mui DataGrid</h4>
            <DatagridTest />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Home
