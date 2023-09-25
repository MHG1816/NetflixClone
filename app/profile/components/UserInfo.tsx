"use client";
import { useRouter } from "next/navigation";

import { User } from "@prisma/client";
import Avatar from "./Avatar";

interface UserInfoProps {
    user: User | null | undefined
}

const UserInfo:React.FC<UserInfoProps> = ({user}) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push("/")}>
        <div className="group flex-row w-44 mx-auto">
            <Avatar />
            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                { user?.name }
            </div>
        </div>
    </div>
  )
}

export default UserInfo