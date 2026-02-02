import { motion } from "framer-motion"

export default function About(){
  return(
    <motion.section
      initial={{opacity:0,y:60}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:.6}}
    >
      <h2>About Me</h2>

      <div className="card">
        I am a Computer Science and Engineering student at Galgotias College of Engineering and Technology, specializing in Artificial Intelligence and Machine Learning. My technical expertise spans Python, Java, and web development using React.js, which allows me to build both intelligent backend systems and responsive user interfaces.
        My project portfolio includes a secure Banking Management System built with Java and SQL, and an AI Chatbot engineered to process complex natural language queries using Machine Learning algorithms. These projects reflect my ability to integrate robust database management with advanced AI concepts to create functional software solutions.
        Beyond technical development, I am a proven leader and effective communicator. As a Class Representative, I served as the primary liaison for over 60 students, resolving academic and administrative challenges through mediation. I also successfully managed the Code Aastra Hackathon, overseeing logistics and participant engagement to ensure a high-quality event. To stay ahead in the field, I have earned certifications including AI Foundations Associate from Oracle and Generative AI Mastermind from OutSkill. I am a quick learner dedicated to solving complex problems through innovative engineering.
      </div>
    </motion.section>
  )
}