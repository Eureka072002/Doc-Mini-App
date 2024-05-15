import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, refrence}) {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale: 1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/30 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
          <div className='flex items-center justify-between px-8 py-3 mb-3'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close ? <IoClose size=".9rem"/> : <GoDownload size=".8rem" color='#fff'/>}
              
            </span>
          </div>

          {data.tag.isOpen && (
            <div className={`tag w-full ${data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'} h-10 flex items-center justify-center`} >
              <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
          )}
        </div>
    </motion.div>
  )
}

export default Card