import * as React from 'react'
import {
  Link,
  Navigate,
  NavLink,
  useLocation,
  useNavigate,
  useResolvedPath
} from 'react-router-dom'
import styles from './Navbar.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)

interface Props {}

interface NavlistProps {
  path: string
  title: string
}

const navlist: NavlistProps[] = [
  { path: '/', title: 'Home' },
  { path: 'page', title: 'Page' },
  { path: 'login', title: 'Login' }
]

export default function Navbar(props: any, {}: Props) {
  const {} = props
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className={cx('navbar')}>
      <Link to={'/'}>Admin Dashboard</Link>
      <ul className={cx('nav')}>
        {navlist.map((nav) => (
          <li key={nav.title} className={cx('nav--items')}>
            <NavLink
              to={nav.path}
              className={({ isActive }) => cx(isActive ? 'active' : '')}
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
        <li>
          <button
            className="btn btn-md btn-primary"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </li>
      </ul>
    </nav>
  )
}
