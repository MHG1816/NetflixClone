"use client";

import Image from "next/image";

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu : React.FC<AccountMenuProps> = ({
    visible
}) => {
  if(!visible) {
    return null;
  }
  return (
    <div className="
        bg-black 
        w-56 
        absolute 
        top-14
        right-0 
        py-5
        flex 
        flex-col
        border-gray-800
    ">
        <div className="flex flex-col gap-3">
            <div className="
                px-3
                group-items
                flex 
                flex-row
                gap-3
                items-center
                w-full
            ">
                <Image 
                    src="/images/placeholder.jpg"
                    className="w-8 h-auto rounded-md"
                    alt="placeholder"
                    width={0}
                    height={0}
                />
                <p className="
                    text-white 
                    text-sm 
                    group-hover
                ">
                    Username
                </p>
            </div>
            <hr className="bg-gray-600 border-0 h-px my-4"/>
            <div 
                className="
                    px-3 
                    text-center 
                    text-white 
                    text-sm 
                    hover:underline
            ">
                Sign out of Netflix
            </div>
        </div>
    </div>
  )
}

export default AccountMenu