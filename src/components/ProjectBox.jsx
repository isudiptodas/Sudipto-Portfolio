import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const openLink = (link) => {
    window.open(link, '_blank');
  }

function ProjectBox({name, desc, liveLink, githubLink, image, image2}) {
    return (
        <>
            <div className='w-full lg:mb-5 h-56 rounded-xl bg-zinc-800 z-20 flex overflow-hidden'>
                <div className='w-1/2 h-full flex overflow-hidden flex-col justify-start items-start px-3 lg:px-7 py-4'>
                    <div className='w-full h-auto flex justify-start items-center gap-2'>
                        <span className='text-white text-sm lg:text-lg backdrop-blur-3xl bg-white/25 px-6 lg:px-10 py-2 rounded-full cursor-pointer hover:opacity-70 duration-200 ease-in-out active:scale-95' onClick={() => openLink(githubLink)}><FaGithub /></span>
                        <span className='text-white text-sm lg:text-lg backdrop-blur-3xl bg-white/25 px-6 lg:px-10 py-2 rounded-full cursor-pointer hover:opacity-70 duration-200 ease-in-out active:scale-95' onClick={() => openLink(liveLink)}><FaExternalLinkAlt /></span>
                    </div>

                    <p className='text-white font-montserrat text-lg font-bold mt-3 mb-3'>{name}</p>
                    <p className='text-[10px] font-montserrat text-white'>{desc}</p>
                </div>

                <div className='w-1/2 h-full overflow-hidden'>
                    <img src={image} className='w-full h-full object-cover lg:hidden' />
                    <img src={image2} className='w-full h-full object-cover hidden lg:block' />
                </div>
            </div>
        </>
    )
}

export default ProjectBox
