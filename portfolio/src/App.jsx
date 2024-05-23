import {Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Work from "./components/pages/Work"
import Contact from "./components/pages/Contact"
import NavBar from "./components/NavBar"


function App() {

  return (
    <>
    <div className="flex">
    <NavBar />
    <div className="flex-grow ml-[20%] md:ml-[25%] lg:ml-[25%]">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
</div>
    </>
  )
}

export default App
