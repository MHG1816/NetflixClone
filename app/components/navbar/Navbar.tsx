"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const toggleShowAccountMenu = useCallback(
        () => setShowAccountMenu(!showAccountMenu),
        [showAccountMenu]
    );
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET){
                setShowBackground(true);
            }
            else {
                setShowBackground(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <nav className="w-full fixed z-40">
            <div className={clsx(`
                px-4 
                md:px-16
                py-6
                flex
                flex-row
                items-center
                transition
                duration-500
                `,
                showBackground ? 'bg-zinc-900 bg-opacity-90' : ''
            )}>
                <div className="relative h-4 w-16 lg:h-8 lg:w-24">
                    <Image fill src="/images/logo.png" alt="logo"/>
                </div>
                <DesktopNavbar />
                <MobileNavbar />
                <div className="
                    flex 
                    flex-row 
                    ml-auto 
                    gap-7 
                    items-center
                ">
                    <div className="
                        text-gray-200 
                        hover:text-gray-300 
                        cursor-pointer 
                        transition
                    ">
                        <BsSearch />
                    </div>
                    <div className="
                        text-gray-200 
                        hover:text-gray-300 
                        cursor-pointer 
                        transition
                    ">
                        <BsBell />
                    </div>
                    <div
                        onClick={toggleShowAccountMenu} 
                        className="
                            flex 
                            flex-row
                            items-center
                            gap-2
                            cursor-pointer
                            relative
                    ">
                        <div className="
                            w-6
                            h-6
                            lg:h-10
                            lg:w-10
                            rounded-md
                            overflow-hidden
                        ">
                            <Image 
                                src="/images/placeholder.jpg" 
                                alt="profile image" 
                                width={0}
                                height={0}
                                className="w-full h-auto"
                            />
                        </div>
                        <BsChevronDown  className={clsx(
                            "text-white transition",
                            showAccountMenu ? "rotate-180" : "rotate-0"
                            )}
                        />

                        <AccountMenu visible={showAccountMenu}/>
                    </div>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar;