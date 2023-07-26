import React from 'react'
import { NavLink } from 'react-router-dom';
import './TopNav.css';
import {FaBars} from 'react-icons/fa'
const TopNav = () => {
    const menuData=[
        {
            path:'/',
            name:"Home"
        },
        {
            path:'/about',
            name:"About"
        },
        {
            path:'/contact',
            name:"Contact"
        },
        {
            path:'/service',
            name:"Service"
        },
        {
            path:'/other',
            name:"Other"
        }
        
    ]
  return (
   <nav>
    <label className='logo'>Navbar</label>
    <div className='bars'>
        <FaBars/>
    </div>
    <div className='menu'>
        {
            menuData.map((item)=>(
                <NavLink to={item.path} key={item.name}>
                    <div className='list_item'>{item.name}</div>
                </NavLink>
            ))
        }
    </div>
   </nav>
  )
}

export default TopNav
