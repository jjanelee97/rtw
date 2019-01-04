import { RouteConfig } from 'react-router-config';
import { withLazy, Layout } from 'components/shared';

import { Layout as AdminLayout } from 'components/admin';
const Dashboard = withLazy(() => import('pages/admin/Dashboard'));

const Signup = withLazy(() => import('pages/account/Signup'));
const Signin = withLazy(() => import('pages/account/Signin'));
const Signout = withLazy(() => import('pages/account/Signout'));
const Home = withLazy(() => import('pages/Home'));
const About = withLazy(() => import('pages/About'));
const Contact = withLazy(() => import('pages/Contact'));
const Counter = withLazy(() => import('pages/Counter'));
const NotFound = withLazy(() => import('pages/NotFound'));

const routes: RouteConfig[] = [
  {
    path: '/admin',
    component: AdminLayout,
    routes: [
      {
        path: '/admin',
        exact: true,
        component: Dashboard
      },
      {
        component: NotFound
      }
    ]
  },
  {
    path: '/account/signup',
    exact: true,
    component: Signup
  },
  {
    path: '/account/signin',
    exact: true,
    component: Signin
  },
  {
    path: '/account/signout',
    exact: true,
    component: Signout
  },
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/about',
        exact: true,
        component: About
      },
      {
        path: '/contact',
        exact: true,
        component: Contact
      },
      {
        path: '/counter',
        exact: true,
        component: Counter
      },
      {
        component: NotFound
      }
    ]
  }
];

export default routes;
