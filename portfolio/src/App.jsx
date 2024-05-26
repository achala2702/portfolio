import {Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Work from "./components/pages/Work"
import Contact from "./components/pages/Contact"
import NavBar from "./components/NavBar"
import { useState, useEffect } from "react"
import HashLoader from "react-spinners/HashLoader";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 4000)
  },[])

  return (
    <div>
    {loading? 
          <div className="bg-[radial-gradient(circle,_#48329C,_#1C1A1A)] h-screen w-screen flex items-center justify-center"><HashLoader
          color={"#000"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        /></div>:
        <div className="flex">
        <NavBar />
        <div className="flex-grow ml-[20%] md:ml-[25%] lg:ml-[20%] max-[760px]:ml-0 overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
    </div>
    }

    </div>
  )
}

export default App
