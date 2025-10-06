import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import call from "../assets/call.png";
import email from "../assets/Email.png";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        {/* <motion.p
            whileInView={{opacity:1, x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1}}
            className='my-4'>
                {CONTACT.address}
            </motion.p> */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 inline-flex items-center text-white-600 hover:underline"
        >
          <img src={call}  className='w-5 h-5 mr-3'/>
          {CONTACT.phoneNo}
        </motion.p>
        <br />
        <motion.a
  href={`mailto:${CONTACT.email}`}
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: -100 }}
  transition={{ duration: 1.5 }}
  className='my-4 inline-flex items-center text-white-600 hover:underline'
>
  <img src={email} alt='email icon' className='w-5 h-5 mr-3' />
  {CONTACT.email}
</motion.a>
      </div>
    </div>
  );
};

export default Contact;
