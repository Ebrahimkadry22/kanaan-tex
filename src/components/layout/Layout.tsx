import { Outlet } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import ScrollProgress from "../ScrollProgress"
import ScrollToTop from "../ScrollToTop"

const Layout = () => {
  return (
    <div>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main>
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout