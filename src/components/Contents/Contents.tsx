import * as React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styles from './Contents.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

interface Props {
  className: string
}

export default function Contents(props: any, {}: Props) {
  const { className } = props
  return (
    <main className={cx(className)}>
      <Outlet />
    </main>
  )
}
