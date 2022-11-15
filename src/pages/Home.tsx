import React, { useState, useEffect } from 'react'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

import './Home.less'

export default function Home() {
  return (
    <>
      <div>
        <h1>Welcome Dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ab,
          quis sequi accusamus soluta quos aperiam cumque vitae dolore iure neque
          dicta similique, quas facilis possimus maiores quod quae dolorum?
        </p>
      </div>

      <div className={'mt-5'}>
        <h2>Less loader Test</h2>
        <div className={'box'}>
          <div className={"bar"}>Lessfile Load! :)</div>
        </div>
      </div>
    </>
  )
}
