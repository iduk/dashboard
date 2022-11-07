import * as React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './BaseLayout.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)
import Navbar from '../Nav/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Contents from '../Contents/Contents'

export default function BaseLayout() {
  const location = useLocation()

  return (
    <div className={cx('base-layout')}>
      <Navbar className={cx('topnav')} />
      <Sidebar className={cx('sidebar')} />
      <Contents className={cx('contents')} />
    </div>
  )
}
