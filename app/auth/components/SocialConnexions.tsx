"use client"

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

const SocialConnexions = () => {
  return (
    <div className="
        flex 
        flex-row 
        items-center 
        gap-4 
        mt-8 
        justify-center
    ">
        <div className="
            w-10
            h-10
            bg-white
            rounded-full
            flex
            items-center
            justify-center
            cursor-pointer
            hover:opacity-80
            transition 
        "
            onClick={() => signIn('google', { callbackUrl: '/profile'})}
        >
            <FcGoogle size={30}/>
        </div>
        <div className="
            w-10
            h-10
            bg-white
            rounded-full
            flex
            items-center
            justify-center
            cursor-pointer
            hover:opacity-80
            transition 
        "
            onClick={() => signIn('github', { callbackUrl: '/profile'})}
        >
            <FaGithub size={30}/>
        </div>
    </div>
  )
}

export default SocialConnexions