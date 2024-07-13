import styles from './About.module.scss'
import { motion } from 'framer-motion';
function About() {
  return (
    <motion.div className="h-screen" 
    initial={{
      opacity: 0,
      y: 50,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.6,
      },
    }}>
      <p> Skills: </p>
      <ul>
        <li>ReactJs</li>
        <li>Angular</li>
        <li>NodeJs</li>
        <li>Java</li>
        <li>Python</li>
      </ul>

      <p>Links:  </p>
      <ul>
        <li>LinkedIn</li>
        <li>GitHub</li>
      </ul>
    </motion.div>
  )
}

export default About
