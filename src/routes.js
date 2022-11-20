import ForgetPassword from 'pages/SignUp/ForgetPassword'
import SignUp from 'pages/SignUp'
import Confirmation from 'pages/Login/Confirmation'
import Home from './pages/Home'
import Login from './pages/Login'

export const routes = [
  { path: '/', element: <Home></Home> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/forget', element: <ForgetPassword /> },
  { path: '/confirm', element: <Confirmation /> },
]
