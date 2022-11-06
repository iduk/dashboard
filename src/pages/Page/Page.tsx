import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Page.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

export default function Page(props: any, {}) {
  const {} = props
  const location = useLocation()

  return (
    <div>
      <h1>Page</h1>
    </div>
  )
}
