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
                <p>Designed: <span className='underline'><Link to='https://mojola.notion.site/Mojola-Ojoniyi-5012964d6a1c4f958780a9d4e31a3cbe?pvs=4'>mothecreator </Link></span></p>
            </div>
        </footer>
    )
}

export default Footer