import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";


const navbarItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Showcase",
    path: "/showcase",
  },
  {
    name: "Product",
    path: "/product",
  },
  {
    name: "Offer",
    path: "/offer",
  },
  {
    name: "Job",
    path: "/job",
  },
];

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  const activeMenuCheck = (data: { name: string; path: string }) => {
    if (pathname === data.path) {
      return true;
    } else {
      return false;
    }
  };

  const [mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="relative h-16 flex justify-between items-center px-4 py-2">
        {/* <img src="" alt="Logo Here" height={50} width={70}/> */}
        <h1 className="text-xl font-bold">Logo Here</h1>
        <ul className="hidden w-1/2 md:flex md:justify-evenly">
          {navbarItems.map((data, index) => (
            <NavLink to={data.path}>
              <li
                key={index}
                className={`px-4 py-1 rounded-full ${
                  activeMenuCheck(data) && "text-white bg-teal-600"
                }`}
              >
                {data.name}
              </li>
            </NavLink>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setMobile(!mobile)}>
          {
            mobile ? <IoMdClose /> : <GiHamburgerMenu />
          }
        </button>
        <ul
          className={`md:hidden absolute top-16 left-0 w-full h-screen bg-slate-300 transition-transform duration-300 ease-in-out ${
            mobile? "flex flex-col py-4 gap-4 z-50" : "hidden"
          }`}
        >
          {navbarItems.map((data, index) => (
            <NavLink to={data.path} className="w-full">
              <li
                key={index}
                className={`px-4 py-1 rounded-full ${
                  activeMenuCheck(data) && "text-white bg-teal-600"
                }`}
                onClick={()=>setMobile(false)}
              >
                {data.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
