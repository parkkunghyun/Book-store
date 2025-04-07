import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    <Navbar/>
    <main className="primary-font min-h-screen px-4 py-6 mx-auto max-w-screen-2xl ">
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default App