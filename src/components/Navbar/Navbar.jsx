/* eslint-disable no-unused-vars */
import { NavbarMenu } from "../Data/data"
import { CiSearch } from "react-icons/ci"
import { FaDumbbell } from "react-icons/fa"
import { PiShoppingCartThin } from "react-icons/pi"
import { MdMenu } from "react-icons/md"


const Navbar = () => {
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
          <div>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2">
              <PiShoppingCartThin />
            </button>
          </div>
          {/* Mobile Hamburger Menu Section */}
        </div>
      </nav>

      {/* Mobile sideBar Section */}
    </>
  );
  
}

export default Navbar