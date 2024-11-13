import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom";

import Button from "./ui/Button"
import WinningSlider from "./WinningSlider"

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [nestedMenuOpen, setNestedMenuOpen] = useState(false);
  const location = useLocation()

  const toggleMenu = () => {
    setNavOpen((currentNavState) => {
      if (currentNavState) {
        setNestedMenuOpen(false)
      }
      return !currentNavState
    })
  }

  const toggleNestedMenu = () => {
    setNestedMenuOpen((currentNavState) => !currentNavState)
  }

  useEffect(() => {
    setNestedMenuOpen(false)
    setNavOpen(false)
  }, [location.pathname])

  return (
    <>
      <header className='w-full bg-primary lg:fixed top-0 inset-x-0 lg:z-[90] h-[4.5rem] sm:h-20 lg:h-[5.5rem] flex items-center justify-center'>
        <nav className="flex items-center justify-between sm:justify-around lg:justify-center px-1 gap-1 sm:gap-0 sm:px-3 lg:px-8 xl:px-16 py-2 lg:gap-5 w-full">
          <Link to='/'>
            <img src="/static/images/Logo.png" className="w-full max-w-52 sm:max-w-72 h-auto" alt="Ludo Vijayta" />
          </Link>
          <div className="flex items-center justify-between w-fit lg:w-full lg:pl-8">
            <ul className="hidden lg:flex items-center justify-between w-fit gap-3 xl:gap-8">
              <li >
                <Link className="hover:text-hovered text-white duration-200 transition-all font-semibold text-[1.1rem] h-full" to="/">Home</Link>
              </li>
              <li className="text-white">
                <p className=" text-white font-semibold text-xl py-3">|</p>
              </li>
              <li className="group relative text-white">
                <p className="group-hover:text-hovered text-white duration-200 transition-all font-semibold text-[1.1rem]">How To Play</p>
                <ul className="bg-gradient-to-b from-primary_light to-primary hidden group-hover:block absolute top-6  inset-0 w-72 h-fit px-4 py-8 rounded-lg space-y-3 z-50">
                  <li className="hover:text-hovered duration-200 transition-all font-semibold text-[1.1rem]"><Link to="/classic" className="block w-full">Vijayta Classic</Link></li>
                  <li className="hover:text-hovered duration-200 transition-all font-semibold text-[1.1rem]"><Link to="/timer" className="block w-full">Vijayta Timer</Link></li>
                  <li className="hover:text-hovered duration-200 transition-all font-semibold text-[1.1rem]"><Link to="/quick-move" className="block w-full">Vijayta Quick Move</Link></li>
                  <li className="hover:text-hovered duration-200 transition-all font-semibold text-[1.1rem]"><Link to="/solo" className="block w-full">Solo Token</Link></li>
                </ul>
              </li>
              <li className="text-white">
                |
              </li>
              <li className="hover:text-hovered text-white duration-200 transition-all font-semibold text-[1.1rem]">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-white">
                |
              </li>
              <li className="hover:text-hovered text-white duration-200 transition-all font-semibold text-[1.1rem]">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="max-w-fit">
              <Button url="https://play.google.com/store/apps/details?id=com.ludovijayta.ludo_vijayta2&pcampaignid=web_share" text="Start Earning" style="yellow" classes="font-semibold sm:font-bold px-2 sm:px-10 py-1 sm:py-3 text-base sm:text-xl rounded-lg sm:rounded-xl" />
            </div>
          </div>
        </nav>
      </header>
      <div className="hidden lg:block h-[72px] sm:h-20 lg:h-[5.5rem]"></div>
      <div className='sticky top-0 w-full px-8 py-3 bg-gradient-to-b to-[#FF544F] from-[#FD9D24] lg:relative  z-[90] lg:z-0 transition-all duration-100 pr-20 lg:pr-0'>
        <WinningSlider />
        <button className="absolute right-10 inset-y-0 z-50 text-white transition-all lg:hidden" onClick={toggleMenu}>
          <p className={`fa-solid ${!navOpen ? "fa-bars -rotate-180" : "fa-xmark rotate-180"} transition-all text-3xl `}></p>
        </button>
      </div>
      <nav className={`lg:hidden ${navOpen ? "translate-x-0 " : "-translate-x-full"} transition-all duration-500  min-h-screen w-[75vw] max-w-[480px] bg-[#5B1892] fixed left-0 top-0 z-[100]`}>
        <ul>
          <li className="w-full px-2 py-3 border-b border-[#8958B0] cursor-pointer">
            <Link to="/" className="w-full block">
              <img src="/static/images/Logo.png" alt="" className="w-full" />
            </Link>
          </li>
          <li className="w-full px-8 py-4 border-b-[0.5px] border-[#8958B0] cursor-pointer text-white font-medium hover:text-hovered text-sm ">
            <Link to="/" className="w-full block">
              Home
            </Link>
          </li>
          <li onClick={toggleNestedMenu} className="w-full px-8 py-4 border-b-[0.5px] border-[#8958B0] cursor-pointer capitalize flex items-center justify-between text-white font-medium hover:text-hovered text-sm relative">
            <p className="w-full block">
              How to play
            </p>
            <button className="fa-solid fa-caret-down"></button>
            <ul className={`lg:hidden ${nestedMenuOpen ? "block lg:hidden" : "hidden"} bg-gradient-to-b from-primary_light to to-primary absolute top-12 inset-0 h-fit  z-[95] `}>
              <li className="px-8 py-4 text-white hover:text-hovered duration-200 transition-all font-medium text-sm"><Link onClick={toggleMenu} to="/classic" className="block w-full">Vijayta Classic</Link></li>
              <li className="px-8 py-4 text-white hover:text-hovered duration-200 transition-all font-medium text-sm"><Link onClick={toggleMenu} to="/timer" className="block w-full">Vijayta Timer</Link></li>
              <li className="px-8 py-4 text-white hover:text-hovered duration-200 transition-all font-medium text-sm"><Link onClick={toggleMenu} to="/quick-move" className="block w-full">Vijayta Quick Move</Link></li>
              <li className="px-8 py-4 text-white hover:text-hovered duration-200 transition-all font-medium text-sm"><Link onClick={toggleMenu} to="/solo" className="block w-full">Solo Token</Link></li>
            </ul>
          </li>
          <li className="w-full px-8 py-4 border-b-[0.5px] border-[#8958B0] cursor-pointer text-white font-medium hover:text-hovered text-sm ">
            <Link to="/about" className="w-full block">
              About Us
            </Link>
          </li>
          <li className="w-full px-8 py-4 border-b-[0.5px] border-[#8958B0] cursor-pointer text-white font-medium hover:text-hovered text-sm ">
            <Link to="/contact" className="w-full block">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar