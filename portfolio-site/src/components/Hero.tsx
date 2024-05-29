import React from 'react'
import styles from './Hero.module.scss'
import {motion} from 'framer-motion'
import { Canvas, useFrame } from "@react-three/fiber"
import {useRef} from 'react'

export default function Hero() {
  return (
    <div className="h-screen">
         <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Darian Chieng</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I'm a recent graduated computer science major who's interested in web development. 
        <br />
        I build projects using ReactJs and NodeJs.
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>

        <Canvas>
          <directionalLight position={[0,0,2]} intensity={0.5}/>
          <ambientLight intensity={0.6}/>


  
          <mesh>
            <boxGeometry args={[4,4,4]}/>
            <meshStandardMaterial color={"green"}/>
           
          </mesh>
        </Canvas>
     </div>  
  )
}
