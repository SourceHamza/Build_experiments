"use client"
import { motion } from "motion/react"


export function TypingEffect({text } : {
    text:string
}){ 
     return <>
     {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 } }
          transition={{ duration: 0.01, delay: index * 0.03 }}
        >
          {letter}
        </motion.span>
      ))}
      </>


}