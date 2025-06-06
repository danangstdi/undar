"use client"

import { RocketTakeoff } from "react-bootstrap-icons"
import Typewriter from 'typewriter-effect'; 

export default function Hero() {
  return (
    <section id="hero" className="mt-44 overflow-hidden max-h-[46rem] lg:mt-24 lg:max-h-[43rem]">
       <div className="flex flex-col items-start gap-8 mt-10 mx-4 md:items-center lg:mt-32 lg:mx-40 xl:mx-64">
         {/* <small className="font-semibold lg:text-xl dark:text-slate-100">Hello I&apos;m</small> */}
         <div className="flex gap-1">
          <h1 className="text-4xl -my-6 poppins-bold text-emerald-400 lg:text-7xl lg:my-0">
            <Typewriter 
              options={{
                loop: true
              }}
              onInit={(typewriter) => { 
                typewriter.typeString('UNDAR') 
                  .pauseFor(2500) 
                  .deleteAll() 
                  .start(); 
              }} 
            /> 
          </h1>
          <h1 className="h1-outline text-4xl -my-6 poppins-bold lg:text-7xl lg:my-0 dark:h1-outline-white">
            JOMBANG
          </h1>
         </div>
         <p className="line-height-2 text-sm text-gray-600 md:text-center lg:text-base dark:text-slate-300">
            Universitas dengan fasilitas yang <strong>lengkap</strong> yang digunakan sebagai penunjang kegiatan mahasiswa baik kegiatan <strong>akademik</strong> maupun <strong>ekstra kampus</strong>.
        </p>
         <a href='https://undar.siakad.net/pmb' target="_blank" className="text-xs flex items-center gap-2 py-3 px-8 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full text-white shadow-lg group lg:text-sm">
           <RocketTakeoff size={18} className="group-hover:rotate-45 group-hover:mr-3 group-hover:duration-300 group-hover:ease-in-out"/>
           Daftar Sekarang
         </a>
       </div>
      {/* <figure className="flex justify-center mt-10 h-3/4 lg:h-[82%] lg:mt-0 lg:justify-start lg:ml-36">
        <Image src={Avatar} alt="" className="h-full w-fit z-10 drop-shadow-2xl"/>
      </figure> */}
    </section>
  )
}
