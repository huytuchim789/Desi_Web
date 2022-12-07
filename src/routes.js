import ForgetPassword from 'pages/SignUp/ForgetPassword'
import SignUp from 'pages/SignUp'
import Confirmation from 'pages/Login/Confirmation'
import Home from './pages/Home'
import Login from './pages/Login'
import FindJob from 'pages/FindJob'
import JobDetail from 'pages/JobDetail'
import CandidateDetail from './pages/CandidateDetail'
import Dashboard from 'pages/Dashboard'
import Profile from 'pages/Profile'
import PrivateRouter from 'components/PrivateRouter'
import HiredDetail from 'pages/HiredDetail'
import PublicRouter from 'components/PrivateRouter/publicRouter'
import JobFavorite from 'pages/JobFavorite'
import PassChange from 'pages/PasswordChange'
import FreelancerList from 'pages/FreelancerList'
export const routes = [
  {
    path: '/',
    element: (
        <Home />
    ),
  },
  {
    path: '/login',
    element: (
      <PublicRouter>
        <Login />
      </PublicRouter>
    ),
  },
  { path: '/signup', element: <SignUp /> },
  { path: '/forget', element: <ForgetPassword /> },
  { path: '/confirm', element: <Confirmation /> },
  {
    path: '/findJob',
    element: <FindJob />,
  },
  { path: '/jobDetail', element: <JobDetail /> },
  { path: '/candidate', element: <CandidateDetail /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
  },
  { path: '/profile', element: <Profile /> },
  { path: '/hiredDetail', element: <HiredDetail /> },
  { path: '/favoriteJob', element: <JobFavorite /> },
  { path: '/passChange', element: <PassChange /> },
  { path: '/freelancers', element: <FreelancerList /> },
]
