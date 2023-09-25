"use client";

import { BsChevronDown } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import { useCallback, useState } from "react";
import clsx from "clsx";


const MobileNavbar = () => {
  const [ showMobileMenu, setShowMobileMenu ] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu(!showMobileMenu)
  }, [showMobileMenu])
  return (
    <div
        onClick={toggleMobileMenu} 
        className="
            lg:hidden 
            flex 
            flex-row 
            items-center 
            gap-2 
            ml-8 
            cursor-pointer 
            relative
    ">
        <p className="text-white text-sm">
            Browse
        </p>
        <BsChevronDown className={clsx(
          "text-white transition",
          showMobileMenu ? 'rotate-180' : 'rotate-0'
        )} />
        <MobileMenu visible={showMobileMenu}/>
    </div>
  )
}

export default MobileNavbar