import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { RiFileDownloadFill } from "react-icons/ri";
import UserImage from '../assets/img/user.png'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center mb-20'>
		<div id='hero-header' className='max-w-[80%] mx-auto my-10'>
			<div className='w-3/5 mx-auto mb-10 bg-slate-900 bg-opacity-15 rounded-full overflow-hidden'>
				<img
					src={UserImage}
					alt='UserImage'
					className='max-w-full drop-shadow-2xl'
				/>
			</div>
			<h1 className='text-4xl font-bold uppercase mb-2'>Carl Sobrepeña</h1>
			<h2 className='text-md uppercase mb-2'>Software Developer | Web Developer</h2>
		</div>
		<div
			id='hero-body'
			className='flex flex-col justify-between p-5 rounded-xl shadow-2xl mb-5 bg-white-50 backdrop-blur-3xl'
		>
			<h3 className='text-md font-medium uppercase'>Connect with me</h3>
			<div className='flex flex-row justify-between p-5 rounded-xl shadow-2xl backdrop-blur-3xl'>
				<a
					href='https://github.com/synthh27'
					rel='noreferrer'
					target='_blank'
					className='cursor-pointer mx-5 transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-3xl'
				>
					<AiFillGithub size={35} />
				</a>
				<a
					href='https://www.linkedin.com/in/carl-sobrepena/'
					rel='noreferrer'
					target='_blank'
					className='cursor-pointer mx-5 transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg'
				>
					<AiFillLinkedin size={35} />
				</a>
				<a
					href='https://drive.google.com/drive/folders/1DoMzPUPSNUFKu9xX5CnMWAgWzfkFjnMh?usp=sharing'
					rel='noreferrer'
					target='_blank'
					className='cursor-pointer mx-5 transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg'
				>
					<RiFileDownloadFill size={35} />
				</a>
			</div>
		</div>
	</div>
  )
}

export default Hero