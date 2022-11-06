import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Login.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

export default function Login(props: any, {}) {
  const {} = props
  const location = useLocation()

  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}
