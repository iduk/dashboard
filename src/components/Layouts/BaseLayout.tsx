import * as React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import styles from './BaseLayout.module.scss'
import classnames from 'classnames/bind'
import Navbar from '../Nav/Navbar'
const cx = classnames.bind(styles)

export default function BaseLayout() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main className={cx('layout')}>
        <Outlet />
      </main>
    </>
  )
}
