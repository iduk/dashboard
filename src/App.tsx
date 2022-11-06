import * as React from 'react'
import { useRoutes } from 'react-router-dom'
import Loading from '@/components/Loading'

// components
import BaseLayout from '@/components/Layouts/BaseLayout'
import Error404 from '@/components/Error/Error404'

// Lazy loading
const Home = React.lazy(() => import('@/pages/Home'))
const Login = React.lazy(() => import('@/pages/Login/Login'))
const Page = React.lazy(() => import('./pages/Page/Page'))

export default function App(): JSX.Element {
  const routes = {
    path: '/',
    element: <BaseLayout />,
    layout: 'BaseLayout',
    children: [
      {
        path: '*',
        element: <Error404 />,
        title: 'Error'
      },
      {
        path: '/',
        element: <Home />,
        title: 'Home'
      },
      {
        path: '/login',
        element: <Login />,
        title: 'Login'
      },
      {
        path: '/page',
        element: <Page />,
        title: 'Page'
      }
    ]
  }

  const routing = useRoutes([routes])

  return <React.Suspense fallback={<Loading />}>{routing}</React.Suspense>
}
