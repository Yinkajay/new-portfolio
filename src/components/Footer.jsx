import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='p-8'>
            <NavLink>HOME</NavLink>

            <div className="">
                <p>Lagos (Nigeria) /</p>

            </div>

                <NavLink className=''>PROJECTs</NavLink>
                <NavLink>ABOUT</NavLink>
        </footer>
    )
}

export default Footer