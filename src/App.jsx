import { useState, useEffect } from "react"
import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  const [dark,setDark]=useState(false)

  useEffect(()=>{
    document.body.className = dark ? "dark":""
  },[dark])

  return (
    <>
      <button
        onClick={()=>setDark(!dark)}
        style={{
          position:"fixed",
          top:20,
          right:20,
          padding:"10px 14px",
          borderRadius:"10px",
          border:"none",
          cursor:"pointer",
          background:"#0a66c2",
          color:"white",
          zIndex:999
        }}
      >
        {dark ? "☀️ Light":"🌙 Dark"}
      </button>

      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App