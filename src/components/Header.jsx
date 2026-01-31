import { motion } from "framer-motion"

export default function Header(){
  return(
    <motion.header
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
      style={{
        textAlign:"center",
        padding:"100px 20px"
      }}
    >
      <motion.h1
        initial={{y:-40}}
        animate={{y:0}}
        transition={{duration:.6}}
        style={{fontSize:"48px"}}
      >
        Shivesh Kumar Pandey
      </motion.h1>

      <p>Software Developer | AI Enthusiast</p>

      <a href="/resume.pdf" download style={{
        display:"inline-block",
        marginTop:20,
        background:"#0a66c2",
        color:"white",
        padding:"12px 20px",
        borderRadius:"8px",
        textDecoration:"none"
      }}>
        Download Resume
      </a>
    </motion.header>
  )
}