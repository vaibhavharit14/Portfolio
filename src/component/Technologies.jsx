import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandTailwind } from 'react-icons/tb'
import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiBootstrap } from 'react-icons/si'
import {animate, inertia, motion} from 'framer-motion'

const iconVariants =(duration) =>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})
const Technologies = () => {
  return (
    <div className='pb-24'>
      <motion.h2
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className='bg-gradient-to-r from-stone-100 to-stone-600 bg-clip-text text-transparent my-20 text-center text-4xl font-bold'>Technologies</motion.h2>
      <motion.div
       whileInView={{opacity:1, x:0}}
       initial={{opacity:0,x:-100}}
       transition={{duration:1.5, staggerChildren: 0.2}}
       className='flex flex-wrap justify-center  items-center gap-4'>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}>
          <SiHtml5 className='text-7xl text-orange-500' />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(3)}
        className='p-4'>
          <SiCss3 className='text-7xl text-blue-500' />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(5)}
        className='p-4'>
          <SiJavascript className='text-7xl text-yellow-400' />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2)}
        className='p-4'>
          <SiJquery className='text-7xl text-blue-400' />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(6)}
        className='p-4'>
          <SiBootstrap className='text-7xl text-purple-600' />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(4)}
        className='p-4'>
          <TbBrandTailwind className='text-7xl text-cyan-500' />
        </motion.div>
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(8)}
        className='p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies