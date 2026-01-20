import React from 'react'
import { FaHtml5, FaCss3Alt,FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {RiTailwindCssFill, RiFlutterFill, RiNextjsLine} from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTypescript, SiDotnet, SiPostgresql, SiExpress } from "react-icons/si";

const Skills = () => {
  return (
  	<div className='flex flex-col justify-center items-center text-center my-20'>
		<div id='skills-header' className='max-w-[80%] mx-auto mt-20 mb-10'>
			<h1 className='text-7xl uppercase font-bold'>SKILLS</h1>
		</div>
		<div id='skills-header' className='max-w-[80%] mx-auto'>
			<h1 className='text-xl uppercase font-bold'>Programming Languages</h1>
		</div>
		<div id='skills-body' className='max-w-[80%] mb-5 flex flex-row flex-wrap justify-center items-center'>
			<div className='relative px-1 my-4 group w-[120px] h-[120px] flex justify-center items-center'>
				<FaHtml5
					size={100}
					className='absolute opacity-100 group-hover:opacity-0 transition-all duration-300'
				/>
				<p className='absolute opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-bold'>
					HTML
				</p>
			</div>
			<div className='relative px-1 my-4 group w-[120px] h-[120px] flex justify-center items-center'>
				<FaCss3Alt
					size={100}
					className='absolute opacity-100 group-hover:opacity-0 transition-all duration-300'
				/>
				<p className='absolute opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-bold'>
					CSS
				</p>
			</div>
			<div className='relative px-1 my-4 group w-[120px] h-[120px] flex justify-center items-center'>
				<IoLogoJavascript
					size={100}
					className='absolute opacity-100 group-hover:opacity-0 transition-all duration-300'
				/>
				<p className='absolute opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-bold'>
					Javascript
				</p>
			</div>
			<div className='relative px-1 my-4 group w-[120px] h-[120px] flex justify-center items-center'>
				<SiTypescript
					size={90}
					className='absolute opacity-100 group-hover:opacity-0 transition-all duration-300'
				/>
				<p className='absolute opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-bold'>
					Typescript
				</p>
			</div>
		</div>
		<div id='skills-header' className='max-w-[80%] mx-auto'>
			<h1 className='text-xl uppercase font-bold'>Front end</h1>
		</div>
		<div id='skills-body' className='max-w-[80%] mb-5 flex flex-row flex-wrap justify-center items-center'>
			<div className='relative px-1 my-4 group w-[120px] h-[120px] flex justify-center items-center'>
				<FaReact
					size={100}
					className='absolute opacity-100 group-hover:opacity-0 transition-all duration-300'
				/>
				<p className='absolute opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-bold'>
					ReactJS
				</p>
			</div>
			<div className='relative px-1 my-4 group w-[120px] h-[120px] flex justify-center items-center'>
				<RiNextjsLine
					size={100}
					className='absolute opacity-100 group-hover:opacity-0 transition-all duration-300'
				/>
				<p className='absolute opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-bold'>
					Next.js
				</p>
			</div>
			<div className='relative px-1 my-4 group w-[120px] h-[120px] flex justify-center items-center'>
				<RiFlutterFill
					size={100}
					className='absolute opacity-100 group-hover:opacity-0 transition-all duration-300'
				/>
				<p className='absolute opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-bold'>
					Flutter
				</p>
			</div>
			<div className='relative px-1 my-4 group w-[120px] h-[120px] flex justify-center items-center'>
				<RiTailwindCssFill
					size={100}
					className='absolute opacity-100 group-hover:opacity-0 transition-all duration-300'
				/>
				<p className='absolute opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-bold'>
					Tailwindcss
				</p>
			</div>
		</div>
		<div id='skills-header' className='max-w-[80%] mx-auto'>
			<h1 className='text-xl uppercase font-bold'>Back end</h1>
		</div>
		<div id='skills-body' className='max-w-[80%] mb-5 flex flex-row flex-wrap justify-center items-center'>
			<div className='relative px-1 my-4 group w-[120px] h-[120px] flex justify-center items-center'>
				<FaNodeJs
					size={90}
					className='absolute opacity-100 group-hover:opacity-0 transition-all duration-300'
				/>
				<p className='absolute opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-bold'>
					NodeJS
				</p>
			</div>
			<div className='relative px-1 my-4 group w-[120px] h-[120px] flex justify-center items-center'>
				<SiExpress
					size={90}
					className='absolute opacity-100 group-hover:opacity-0 transition-all duration-300'
				/>
				<p className='absolute opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-bold'>
					Express.js
				</p>
			</div>
			<div className='relative px-1 my-4 group w-[120px] h-[120px] flex justify-center items-center'>
				<BiLogoMongodb
					size={100}
					className='absolute opacity-100 group-hover:opacity-0 transition-all duration-300'
				/>
				<p className='absolute opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-bold'>
					MongoDB
				</p>
			</div>
			<div className='relative px-1 my-4 group w-[120px] h-[120px] flex justify-center items-center'>
				<SiDotnet
					size={110}
					className='absolute opacity-100 group-hover:opacity-0 transition-all duration-300'
				/>
				<p className='absolute opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-bold'>
					.NET
				</p>
			</div>
			<div className='relative px-1 my-4 group w-[120px] h-[120px] flex justify-center items-center'>
				<SiPostgresql
					size={100}
					className='absolute opacity-100 group-hover:opacity-0 transition-all duration-300'
				/>
				<p className='absolute opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 font-bold'>
					PostgreSQL
				</p>
			</div>
		</div>
	</div>


  )
}

export default Skills