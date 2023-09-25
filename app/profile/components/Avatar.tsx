"use client";

import Image from "next/image";
const Avatar = () => {
  return (
    <div className="
        w-44
        h-44
        rounded-md
        flex
        items-center
        justify-center
        border-2
        border-transparent
        group-hover:cursor-pointer
        group-hover:border-white
        overflow-hidden
    ">
        <Image src="/images/placeholder.jpg" alt="profile image" width={175} height={175}/>
    </div>
  )
}

export default Avatar