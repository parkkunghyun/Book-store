import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
    <Navbar/>
    <main className="primary-font min-h-screen px-4 py-6 mx-auto max-w-screen-2xl ">
      <Outlet/>
    </main>
    <footer>footer</footer>
    </>
  )
}

export default App