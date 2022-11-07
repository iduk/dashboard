import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import styles from './Home.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

export default function Home() {
  return (
    <>
      <h1>Welcome Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ab,
        quis sequi accusamus soluta quos aperiam cumque vitae dolore iure neque
        dicta similique, quas facilis possimus maiores quod quae dolorum?
      </p>
    </>
  )
}
