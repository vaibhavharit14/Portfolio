import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      {/* Empty div to preserve spacing on the left */}
      <div></div>

      {/* Social Icons aligned to the right */}
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <motion.a
          href='https://www.linkedin.com/feed/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          whileHover={{ scale: 1.2, color: '#0077b5' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href='https://github.com/vaibhavharit14'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
          whileHover={{ scale: 1.2, color: '#ffffff' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaGithub />
        </motion.a>
        {/* <a
          href='https://www.instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
        >
          <FaInstagram />
        </a>
        <a
          href='https://twitter.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Twitter'
        >
          <FaSquareXTwitter />
        </a> */}
      </div>
    </nav>
  )
}

export default Navbar