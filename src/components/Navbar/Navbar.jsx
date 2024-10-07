/* eslint-disable no-unused-vars */
import { NavbarMenu } from "../Data/data"
import { CiSearch } from "react-icons/ci"
import { FaDumbbell } from "react-icons/fa"
import { PiShoppingCartThin } from "react-icons/pi"
import { RxCross1 } from 'react-icons/rx';
import { MdMenu } from "react-icons/md"
import { useState } from "react"
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu"


const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className="text-secondary">Gym</p>
          </div>
          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icons Section */}
          <div className="flex flex-row justify-center items-center">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2">
              <PiShoppingCartThin />
            </button>
          </div>
          {/* Mobile Hamburger Menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? (
                <RxCross1 className="text-4xl" />
              ) : (
                <MdMenu className="text-4xl" />
              )}{' '}
          </div>
        </div>
      </nav>

      {/* Mobile sideBar Section */}
      <ResponsiveMenu open={open} />
    </>
  );
  
}

export default Navbar