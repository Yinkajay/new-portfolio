import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  return (
    <>
      <nav className="hidden mobile:flex px-8 h-20 justify-between items-center">
        <NavLink to="/home">HOME</NavLink>

        <div>
          <p>Lagos (Nigeria) / {time}</p>
        </div>

        <div className="flex gap-4">
          <NavLink to="/projects">PROJECTs</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
        </div>
      </nav>

      <nav className="mobile:hidden flex justify-between px-4 py-6">
        <ul>
          <li className="text-sm underline mb-3">
            <NavLink to="/home">HOME</NavLink>
          </li>
          <li className="text-sm underline mb-3">
            <NavLink to="/projects">PROJECTs</NavLink>
          </li>
          <li className="text-sm underline mb-3">
            <NavLink to="/about">ABOUT</NavLink>
          </li>
        </ul>
        <p className="text-sm">Lagos (Nigeria) / {time}</p>
      </nav>
    </>
  );
};

export default Navbar;
