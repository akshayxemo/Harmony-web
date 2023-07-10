import './App.css'
import Signup_login from './pages/signup/signup-login'
import SignupSuccess from './pages/signup/signup-success'
import Service from './pages/services/main_service'
import Loader from './components/loader'
import Sentiment from './pages/services/questions'
import * as React from 'react'
import {
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path:'/auth',
    element: <Signup_login page="login"/>
  },
  {
    path:'/auth/login',
    element:<Signup_login page="login"/>
  },
  {
    path:'/auth/signup',
    element:<Signup_login page="signup"/>
  },
  {
    path:'/auth/forget-password',
    element:<Signup_login page="forget-password"/>
  },
  {
    path:'/auth/success',
    element: <SignupSuccess/>
  },
  {
    path:'/loader',
    element:<Loader/>
  },
  {
    path:'/services',
    element: <Service/>
  },
  {
    path:'/services/audio-therapy',
    element: <Service page="audio"/>
  },
  {
    path:'/services/reading-therapy',
    element: <Service page="read"/>
  },
  {
    path:'/services/meditation-therapy',
    element: <Service page="meditation"/>
  },
  {
    path:'/services/laughing-therapy',
    element: <Service page="laugh"/>
  },
  {
    path:'/sentiment',
    element: <Sentiment/>
  }
])

function App() {

  return (
    <>
      <React.StrictMode>
        <RouterProvider router={Router}/>
      </React.StrictMode>
    </>
  )
}

export default App
