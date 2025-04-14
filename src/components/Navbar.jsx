import { NavLink } from "react-router-dom"

const Navbar = () => {
    const now = new Date()
    const time = now.toLocaleTimeString()
    return (
        <nav className="p-8 flex justify-between" >
            <NavLink>HOME</NavLink>

            <div className="">
                <p>Lagos (Nigeria) / {time}</p>

            </div>

            <div className="bg-amber-400 flex">
                <NavLink className=''>PROJECTs</NavLink>
                <NavLink>ABOUT</NavLink>
            </div>
        </nav>
    )
}

export default Navbar