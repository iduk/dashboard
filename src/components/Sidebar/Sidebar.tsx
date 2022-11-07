import * as React from 'react'
import {
  Link,
  Navigate,
  NavLink,
  useLocation,
  useNavigate,
  useResolvedPath
} from 'react-router-dom'
import styles from './Sidebar.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

interface Props {
  className: string
}

export default function Sidebar(props: any, {}: Props) {
  const { className } = props
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <aside className={cx(className)}>
      <div className={cx('sidebar-wrapper')}>
        <ul className={cx('nav')}>
          <li className={cx('nav--items')}>
            <NavLink
              to={'/'}
              className={({ isActive }) => cx(isActive ? 'active' : '')}
            >
              menu title
            </NavLink>
          </li>

          <li>
            <button
              className="btn btn-md btn-primary btn-block"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </aside>
  )
}
