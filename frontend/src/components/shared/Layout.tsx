import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout