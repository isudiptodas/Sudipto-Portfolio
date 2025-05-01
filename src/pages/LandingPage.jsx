import React, { useState, useEffect } from 'react'
import { motion } from "motion/react";
import stars from '../assets/stars.jpg';
import profile from '../assets/profile.jpg';
import { FaDownload } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import FileSaver, { saveAs } from 'file-saver';
import ProjectBox from '../components/ProjectBox';
import { projectDetails } from '../data/projectDetails';

function LandingPage() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2500);
  }, []);

  const openMail = (mail) => {
    window.open(`mailto:${mail}`, '_blank');
  }

  const handleDownload = () => {
    FileSaver.saveAs('./CV_SUDIPTO_DAS.pdf', "CV_SUDIPTO_DAS.pdf");
  }

  return (
    <>
      <div className='w-full overflow-y-auto whitespace-nowrap h-auto flex flex-col relative content'>

        {/* Main div */}
        <div className='w-full h-auto flex flex-col justify-center items-center bg-black'>

          {/* Download cv button */}
          <div className='w-full h-28 sm:h-36 bg-black flex justify-center items-center relative'>
            <img src={stars} className='absolute opacity-70 z-10 lg:hidden w-full h-full object-cover' />
            <motion.p className='text-white z-20 text-[12px] flex justify-center items-center gap-2 backdrop-blur-3xl bg-white/25 rounded-full px-7 py-2 cursor-pointer' onClick={handleDownload}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >DOWNLOAD CV <FaDownload /></motion.p>
          </div>

          {/* Name and photo */}
          <div className='w-full relative h-auto flex flex-col justify-center items-center py-4 bg-black'>
            <img src={stars} className='absolute opacity-70 lg:hidden z-10 w-full h-full object-cover' />

            <div className='w-full z-20 h-auto pt-10 pb-5 overflow-hidden flex justify-center items-center gap-4'>
              <motion.h1 className='text-white font-monterey text-4xl sm:text-6xl md:text-8xl'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
              >SUDIPTO</motion.h1>
              <motion.h1 className='text-white font-monterey text-4xl sm:text-6xl md:text-8xl'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              >DAS</motion.h1>
            </div>

            <div className='w-full h-56 sm:h-60 lg:h-[400px] z-20 flex justify-center items-center'>
              <motion.div className='w-1/2 h-full overflow-hidden bg-black rounded-xl'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <img src={profile} className='h-full w-full object-cover lg:object-top grayscale hover:grayscale-0 duration-300 ease-in-out' />
              </motion.div>
            </div>

          </div>

          {/* Social links */}
          <div className='w-full h-auto py-5 md:py-12 px-24 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-3'>

            <img src={stars} className='absolute opacity-70 z-10 lg:hidden w-full h-full object-cover' />
            <motion.p className='text-white z-20 flex justify-center items-center gap-2 text-[12px] w-full backdrop-blur-3xl cursor-pointer bg-white/25 rounded-full py-2 md:py-3 lg:py-4 lg:text-sm' onClick={() => openLink('https://www.linkedin.com/in/sudipto-das-386a33234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >LinkedIn <FaLinkedin /></motion.p>

            <motion.p className='text-white z-20 flex justify-center items-center gap-2 text-[12px] w-full backdrop-blur-3xl cursor-pointer bg-white/25 rounded-full py-2 md:py-3 lg:py-4 lg:text-sm' onClick={() => openLink('https://github.com/isudiptodas')}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >Github <FaGithub /></motion.p>

            <motion.p className='text-white z-20 flex justify-center items-center gap-2 text-[12px] w-full backdrop-blur-3xl cursor-pointer bg-white/25 rounded-full py-2 md:py-3 lg:py-4 lg:text-sm' onClick={() => openMail('isudiptodas01@outlook.com')}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
            >Outlook <PiMicrosoftOutlookLogoFill /></motion.p>

            <motion.p className='text-white z-20 flex justify-center items-center gap-2 text-[12px] w-full backdrop-blur-3xl cursor-pointer bg-white/25 rounded-full py-2 md:py-3 lg:py-4 lg:text-sm' onClick={() => openMail('work.sudiptodas@gmail.com')}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 100, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
            >Gmail <SiGmail /></motion.p>
          </div>
        </div>
      </div>

      {/* My info */}
      <div className='w-full bg-black px-10 md:px-24 overflow-hidden py-5 h-auto relative'>
        <img src={stars} className='absolute opacity-70 z-10 lg:hidden w-full h-full object-cover' />
        <motion.p className='text-white z-20 sm:text-center relative font-montserrat break-words text-[12px] lg:text-xl'
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 100, x: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
        >I am a full stack developer with hands on working experience with MERN stack technology. I love to create solutions for real world problems which I think will be beneficial for me as well as for other users also.</motion.p>
      </div>

      {/* Areas of interest */}
      <div className='w-full z-20 h-auto py-5 sm:py-10 bg-black relative flex flex-col justify-center items-center'>
        <img src={stars} className='absolute  opacity-70 z-10 lg:hidden w-full h-full object-cover' />
        <motion.h1 className='text-white z-20 font-monterey text-4xl sm:text-5xl md:text-6xl'
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 100, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >Areas of Interest</motion.h1>

        <motion.div className='w-full h-auto py-5 sm:py-10 px-5 flex flex-wrap justify-center items-center gap-5'
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 100, x: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <p className='text-white z-20 border-[1.5px] rounded-full px-5 py-2 border-white text-[12px] lg:text-sm'>DevOps</p>
          <p className='text-white z-20 border-[1.5px] rounded-full px-5 py-2 border-white text-[12px] lg:text-sm'>Human Computer Interaction</p>
          <p className='text-white z-20 border-[1.5px] rounded-full px-5 py-2 border-white text-[12px] lg:text-sm'>UI/UX</p>
          <p className='text-white z-20 border-[1.5px] rounded-full px-5 py-2 border-white text-[12px] lg:text-sm'>Cloud Computing</p>
          <p className='text-white z-20 border-[1.5px] rounded-full px-5 py-2 border-white text-[12px] lg:text-sm'>AI/ML</p>
        </motion.div>
      </div>

      {/* Skills */}
      <div className='w-full h-auto py-5 bg-black overflow-hidden flex flex-col justify-center items-center relative'>
        <img src={stars} className='absolute opacity-70 z-10 lg:hidden w-full h-full object-cover' />

        <motion.h1 className='text-white z-20 mb-3 font-monterey text-4xl sm:text-5xl md:text-6xl'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ delay: 2.4, duration: 1 }}
        >Tech Stack</motion.h1>

        <div className='w-[80%] md:w-[60%] lg:w-[50%] rounded-xl h-auto px-5 backdrop-blur-3xl bg-white/25 py-5 flex flex-col z-20 justify-center items-start md:items-center'>
          <motion.p className='text-white text-[12px] text-start lg:text-center lg:text-sm font-montserrat'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ delay: 2.6, duration: 1 }}
          >Web Technology : HTML, CSS, JavaScript, TailwindCSS, ReactJs, TypeScript, NodeJs, Express, NextJs</motion.p><br />
          <motion.p className='text-white text-[12px] text-start lg:text-center lg:text-sm font-montserrat'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ delay: 2.6, duration: 1 }}
          >Languages : C++, Java</motion.p><br />
          <motion.p className='text-white text-[12px] text-start lg:text-center lg:text-sm font-montserrat'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ delay: 2.6, duration: 1 }}
          >Tools : Git, Github, Figma, Docker, Prisma</motion.p><br />
          <motion.p className='text-white text-[12px] text-start lg:text-center lg:text-sm font-montserrat'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ delay: 2.6, duration: 1 }}
          >Cloud : AWS</motion.p><br />
        </div>
      </div>

      {/* Projects */}
      <div className='w-full h-auto relative py-2 px-5 flex flex-col justify-center items-center overflow-hidden gap-5 bg-black'>
        <img src={stars} className='absolute opacity-70 z-10 lg:hidden w-full h-full object-cover' />

        <motion.h1 className='text-white relative z-20 mb-3 font-monterey text-4xl sm:text-5xl md:text-6xl'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ delay: 2.8, duration: 1 }}
        >Projects</motion.h1>

        <div className='w-full h-auto px-3 py-5 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4'>
          
          {projectDetails.map((pro, index)=> {
            return <ProjectBox key={index} name={pro.name} desc={pro.desc} image={pro.image} image2={pro.image2} githubLink={pro.githubLink} liveLink={pro.liveLink}/>
          })}
        </div>
      </div>

      {/* To be continued ... */}
      <div className='w-full h-20 bg-black relative overflow-hidden flex justify-center items-center'>
        <img src={stars} className='absolute opacity-70 z-10 lg:hidden w-full h-full object-cover' />
        <p className='text-white font-montserrat z-20 text-[12px] lg:text-sm'>To Be Continued ...</p>
      </div>

      {/* Ending */}
      <div className='w-full h-auto px-5 py-5 md:flex md:justify-center md:items-center md:gap-5 sm:py-8 bg-black overflow-hidden relative'>
        <img src={stars} className='absolute opacity-70 z-10 lg:hidden w-full h-full object-cover' />

        <p className='text-white z-20 relative text-6xl sm:text-7xl font-monterey font-bold'>LET'S </p>
        <p className='text-white z-20 relative text-6xl sm:text-7xl font-monterey font-bold'> CONNECT 🤝🏻</p>
      </div>

      {/* Links */}
      <div className='w-full h-auto bg-black pt-8 pb-24 px-24 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-3'>

        <img src={stars} className='absolute opacity-70 z-10 lg:hidden w-full h-full object-cover' />
        <p className='text-white z-20 flex justify-center items-center gap-2 text-[12px] w-full backdrop-blur-3xl cursor-pointer bg-white/25 rounded-full py-2 md:py-3 lg:py-4 lg:text-sm' onClick={() => openLink('https://www.linkedin.com/in/sudipto-das-386a33234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}>LinkedIn <FaLinkedin /></p>
        <p className='text-white z-20 flex justify-center items-center gap-2 text-[12px] w-full backdrop-blur-3xl cursor-pointer bg-white/25 rounded-full py-2 md:py-3 lg:py-4 lg:text-sm' onClick={() => openLink('https://github.com/isudiptodas')}>Github <FaGithub /></p>
        <p className='text-white z-20 flex justify-center items-center gap-2 text-[12px] w-full backdrop-blur-3xl cursor-pointer bg-white/25 rounded-full py-2 md:py-3 lg:py-4 lg:text-sm' onClick={() => openMail('isudiptodas01@outlook.com')}>Outlook <PiMicrosoftOutlookLogoFill /></p>
        <p className='text-white z-20 flex justify-center items-center gap-2 text-[12px] w-full backdrop-blur-3xl cursor-pointer bg-white/25 rounded-full py-2 md:py-3 lg:py-4 lg:text-sm' onClick={() => openMail('work.sudiptodas@gmail.com')}>Gmail <SiGmail /></p>
      </div>

    </>
  )
}

export default LandingPage
