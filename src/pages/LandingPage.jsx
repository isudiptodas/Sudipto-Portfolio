import React, { useState, useEffect } from 'react'
import { motion } from "motion/react";
import stars from '../assets/stars.jpg';
import profile from '../assets/profile.jpg';
import learnfinity from '../assets/learnfinity.jpg';
import downtown from '../assets/downtown.jpg';
import shield from '../assets/shield.jpg';
import learnfinity2 from '../assets/learnfinity.png';
import downtown2 from '../assets/downtown.png';
import shield2 from '../assets/shield.png';
import { FaDownload } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";
import FileSaver, { saveAs } from 'file-saver';

function LandingPage() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2500);
  }, []);

  const openLink = (link) => {
    window.open(link, '_blank');
  }

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

            <div className='w-full h-56 sm:h-60 lg:h-80 z-20 flex justify-center items-center'>
              <motion.div className='w-1/2 h-full overflow-hidden bg-black rounded-xl'
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <img src={profile} className='h-full w-full object-cover grayscale hover:grayscale-0 duration-300 ease-in-out' />
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
          <motion.p className='text-white text-[12px] lg:text-sm font-montserrat'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ delay: 2.6, duration: 1 }}
          >Web Technology : HTML, CSS, JavaScript, TailwindCSS, ReactJs, TypeScript, NodeJs, Express, NextJs</motion.p><br />
          <motion.p className='text-white text-[12px] lg:text-sm font-montserrat'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ delay: 2.6, duration: 1 }}
          >Languages : C++, Java</motion.p><br />
          <motion.p className='text-white text-[12px] lg:text-sm font-montserrat'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ delay: 2.6, duration: 1 }}
          >Tools : Git, Github, Figma, Docker, Prisma</motion.p><br />
          <motion.p className='text-white text-[12px] lg:text-sm font-montserrat'
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
        initial={{opacity:0, y:40}}
        animate={{opacity:100, y:0}}
        transition={{delay: 2.8, duration: 1}}
        >Projects</motion.h1>

        <div className='w-full lg:w-[70%] lg:mb-5 h-56 rounded-xl bg-zinc-900 z-20 flex overflow-hidden'>
          <div className='w-1/2 h-full flex overflow-hidden flex-col justify-start items-start px-3 lg:px-7 py-4'>
            <div className='w-full h-auto flex justify-start items-center gap-2'>
              <span className='text-white text-sm lg:text-lg backdrop-blur-3xl bg-white/25 px-6 lg:px-10 py-2 rounded-full cursor-pointer' onClick={() => openLink('https://github.com/isudiptodas/Learnfinity')}><FaGithub /></span>
              <span className='text-white text-sm lg:text-lg backdrop-blur-3xl bg-white/25 px-6 lg:px-10 py-2 rounded-full cursor-pointer' onClick={() => openLink('https://learnfinity-1.onrender.com')}><FaExternalLinkAlt /></span>
            </div>

            <p className='text-white font-montserrat text-lg font-bold mt-3 mb-3'>Learnfinity</p>
            <p className='text-[10px] font-montserrat text-white'>This website is made for users focusing in tech, offering a wide range of resources and tools like : collaborative IDE, web playground, AI studio, note saver, community feature etc</p>
          </div>

          <div className='w-1/2 h-full overflow-hidden'>
            <img src={learnfinity} className='w-full h-full object-cover lg:hidden' />
            <img src={learnfinity2} className='w-full h-full object-cover hidden lg:block' />
          </div>
        </div>

        <div className='w-full lg:w-[70%] lg:mb-5 h-56 rounded-xl bg-zinc-900 z-20 flex overflow-hidden'>
          <div className='w-1/2 h-full flex overflow-hidden flex-col justify-start items-start px-3 lg:px-7 py-4'>
            <div className='w-full h-auto flex justify-start items-center gap-2'>
              <span className='text-white text-sm lg:text-lg backdrop-blur-3xl bg-white/25 px-6 lg:px-10 py-2 rounded-full cursor-pointer' onClick={() => openLink('https://github.com/isudiptodas/Downtown-io')}><FaGithub /></span>
              <span className='text-white text-sm lg:text-lg backdrop-blur-3xl bg-white/25 px-6 lg:px-10 py-2 rounded-full cursor-pointer' onClick={() => openLink('https://downtown-io-its3.onrender.com')}><FaExternalLinkAlt /></span>
            </div>

            <p className='text-white font-montserrat text-lg font-bold mt-3 mb-3'>Downtown.io</p>
            <p className='text-[10px] font-montserrat text-white'>This platform provides users to view nearby places and avail local services, in addition to this users can also check upcoming events, get a trip guide with AI.</p>
          </div>

          <div className='w-1/2 h-full overflow-hidden'>
            <img src={downtown} className='w-full h-full object-cover lg:hidden' />
            <img src={downtown2} className='w-full h-full object-cover hidden lg:block' />
          </div>
        </div>

        <div className='w-full lg:w-[70%] lg:mb-5 h-56 rounded-xl bg-zinc-900 z-20 flex overflow-hidden'>
          <div className='w-1/2 h-full flex overflow-hidden flex-col justify-start items-start px-3 lg:px-7 py-4'>
            <div className='w-full h-auto flex justify-start items-center gap-2'>
              <span className='text-white text-sm lg:text-lg backdrop-blur-3xl bg-white/25 px-6 lg:px-10 py-2 rounded-full cursor-pointer' onClick={() => openLink('https://github.com/isudiptodas/Shield')}><FaGithub /></span>
              <span className='text-white text-sm lg:text-lg backdrop-blur-3xl bg-white/25 px-6 lg:px-10 py-2 rounded-full cursor-pointer' onClick={() => openLink('https://shield-1-w26n.onrender.com')}><FaExternalLinkAlt /></span>
            </div>

            <p className='text-white font-montserrat text-lg font-bold mt-3 mb-3'>Shield</p>
            <p className='text-[10px] font-montserrat text-white'>Shield is focused on storing passwords on 256-bit protection and on top of that additional 3 layer security measures.</p>
          </div>

          <div className='w-1/2 h-full overflow-hidden'>
            <img src={shield} className='w-full h-full object-cover lg:hidden' />
            <img src={shield2} className='w-full h-full object-cover hidden lg:block' />
          </div>
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
