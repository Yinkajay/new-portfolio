import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='absolute h-20 max-w-screen-2xl mx-auto left-0 right-0 bg-aber-300 bottom-0 p-8 flex justify-center'>
            <ul className='flex gap-3 md:gap-5'>
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
                    <Link className='underline'>Hashnode</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer