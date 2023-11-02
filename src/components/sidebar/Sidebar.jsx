import React from 'react'
import {motion} from 'framer-motion'
import './Sidebar.css'
import {UilBars} from '@iconscout/react-unicons'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuItem from './MenuItem';
import { useState } from 'react';

const Sidebar = () => {
  const [open,setOpen]=useState(false)

  const variats={
    true:{
      left:'0'
    },
    false:{
      left:'-60%'
    }
  }
  return (
    <>
    <div className='bars'onClick={()=>setOpen(!open)} style={open ? {left:'59%'}:{left:'5%'}}>
      <UilBars/>
    </div>
    <motion.div className='sidebar'
    variants={variats}
    animate={
      window.innerWidth<=768?`${open}`:'' }
    >
        {/* Logo*/}
        <div className=' logo'>
         <img src='./logo.png' alt="" />
         <span>
            Sh<span>o</span>ps
         </span>
        </div>
        {/* Menu*/}
       
           <MenuItem/>
      

    </motion.div>
    </>
  )
}

export default Sidebar;
