import { NavLink } from "react-router-dom"

const Navbar = () => {
    const now = new Date()
    const time = now.toLocaleTimeString()
    return (
        <>
            <nav className="hidden mobile:flex px-8 h-20 justify-between items-center" >
                <NavLink to='/home'>HOME</NavLink>

                <div className="">
                    <p>Lagos (Nigeria) / {time}</p>
                </div>

                <div className="flex gap-4">
                    <NavLink to='/projects' className=''>PROJECTs</NavLink>
                    <NavLink to='/about'>ABOUT</NavLink>
                </div>
            </nav>
            <nav className="mobile:hidden flex justify-between px-4 py-6">
                <ul>
                    <li className="text-sm underline mb-3"><NavLink>HOME</NavLink></li>
                    <li className="text-sm underline mb-3"><NavLink>PROJECTs</NavLink></li>
                    <li className="text-sm underline mb-3"><NavLink>ABOUT</NavLink></li>
                </ul>
                <p className="text-sm">Lagos (Nigeria) / {time}</p>
            </nav>
        </>
    )
}

export default Navbar