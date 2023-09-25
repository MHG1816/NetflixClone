import React from 'react'
import NavbarItem from './NavbarItem'

const DesktopNavbar = () => {
  return (
    <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by language" />
    </div>
  )
}

export default DesktopNavbar