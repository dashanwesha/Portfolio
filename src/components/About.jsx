import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import myPicImage from "../assets/Mypic.jpg"; 
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row items-start gap-10'>
      {/* Text Container */}
      <div className='flex-1'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I am a 3rd-year B.Tech student at KIIT University, specializing in
          Computer Science. I have a strong foundation in programming with
          expertise in Java and C/C++. Additionally, I am proficient in full-stack
          development using the MERN stack (MongoDB, Express.js, React.js, Node.js),
          which enables me to build robust and scalable web applications.
          My academic background, combined with hands-on experience in various
          development projects, has equipped me with a versatile skill set that I am
          excited to leverage in my professional career.
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>

   
      <div className='flex-shrink-0 mt-10 lg:mt-0 relative group'>
        
        <motion.img
          src={myPicImage} 
          alt='My Profile'
          className='w-[200px] h-[200px] rounded-full object-cover border-[4px] border-white shadow-lg group-hover:opacity-70 transition duration-300 ease-in-out'
          variants={fadeIn("left", "spring", 0.5, 1)}
        />

       
        <div className='absolute inset-0 bg-black bg-opacity-70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
          <div className='text-white text-center space-y-4'>
            <a
              href='https://www.linkedin.com/in/anwesha-dash-36009b261/'
              target='_blank'
              rel='noopener noreferrer'
              className='block hover:text-blue-500'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/dashanwesha'
              target='_blank'
              rel='noopener noreferrer'
              className='block hover:text-gray-500'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
