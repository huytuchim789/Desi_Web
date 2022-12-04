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

export const routes = [
  {
    path: '/',
    element: (
      <PrivateRouter>
        <Home />
      </PrivateRouter>
    ),
  },
  {
    path: '/login',
    element: (
      <PrivateRouter>
        <Login />
      </PrivateRouter>
    ),
  },
  { path: '/signup', element: <SignUp /> },
  { path: '/forget', element: <ForgetPassword /> },
  { path: '/confirm', element: <Confirmation /> },
  { path: '/findJob', element: <FindJob /> },
  { path: '/jobDetail', element: <JobDetail /> },
  { path: '/candidate', element: <CandidateDetail /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/profile', element: <Profile /> },
  { path: '/hiredDetail', element: <HiredDetail /> },
]
