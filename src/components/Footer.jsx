import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='absolute h-20 max-w-screen-2xl mx-auto left-0 right-0 bg-aber-300 max-mobile:flex-col bottom-0 p-8 flex justify-center gap-5 max-mobile:gap-2'>
            <ul className='flex gap-3 md:gap-5 max-mobile:mx-auto'>
                <li>
                    <Link className='underline'>LinkedIn</Link>
                </li>
                <li>
                    <Link className='underline'>Github</Link>
                </li>
                <li>
                    <Link className='underline'>Twitter</Link>
                </li>
                <li>
                    <Link className='underline' to={'https://adeyinka.hashnode.dev/'}>Hashnode</Link>
                </li>
            </ul>
            <div className="max-mobile:mx-auto">
                <p>Designed: <span className='underline'> mothecreator </span></p>
            </div>
        </footer>
    )
}

export default Footer