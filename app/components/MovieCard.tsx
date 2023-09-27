"use client";

import { Movie } from "@prisma/client"
import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import useInfoModal from "../hooks/useInfoModal";
import { AiOutlineInfo } from "react-icons/ai";

interface MovieCardProps {
    data: Movie
}

const MovieCard : React.FC<MovieCardProps> = ({data}) => {
    const router = useRouter();
    const {openModal} = useInfoModal()
    const toggleOpenModal = useCallback(() => {
        openModal(data?.id)
    },
    [data?.id, openModal]);

    return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
        <Image 
            src={data.thumbnailUrl}
            alt="Thumbnail"
            fill
            className="
                cursor-pointer
                object-cover
                transition
                shadow-xl
                rounded-md
                group-hover:opacity-90
                sm:group-hover:opacity-0
                delay-300
                w-full
                
            "
        />
        <div className="
            opacity-0
            absolute
            top-0
            transition
            duration-200
            z-10
            invisible
            sm:visible
            delay-300
            w-full
            h-[20vw]
            scale-0
            group-hover:scale-110
            group-hover:-translate-y-[6vw]
            group-hover:translate-x-[2vw]
            group-hover:opacity-100
        ">
            <Image 
                src={data.thumbnailUrl} alt="Thumbnail"
                fill
                className="
                    cursor-pointer
                    object-cover
                    transition
                    duration
                    shadow-xl
                    rounded-t-md
                    w-full
                    h-auto
                "
            />
            <div className="
                absolute
                bottom-0
                z-10
                bg-zinc-800 
                opacity-90
                p-2 
                lg:p-4 
                w-full 
                transition 
                shadow-md 
                rounded-b-md
            ">
                <div className="flex flex-row items-center gap-3">
                    <div className="
                        cursor-pointer 
                        w-6 
                        h-6 
                        lg:w-10 
                        lg:h-10 
                        bg-white
                        rounded-full 
                        flex
                        justify-center
                        items-center
                        transition
                        hover:bg-neutral-300 
                        " 
                        onClick={() => {router.push("/watch/"+data?.id)}}
                    >
                        <BsFillPlayFill size={30}/>
                    </div>
                    <FavoriteButton movieId={data?.id}/>
                    <div onClick={toggleOpenModal}
                        className="
                            cursor-pointer
                            ml-auto
                            group/item
                            w-6
                            h-6
                            lg:w-10
                            lg:h-10
                            border-white
                            border-2
                            rounded-full
                            flex
                            justify-center
                            items-center
                            transition
                            hover:border-neutral-300
                        "
                    >
                        <AiOutlineInfo className="text-white group-hover/item:text-neutral-300" size={25}/>
                    </div>
                </div>
                <p className="text-green-400 font-semibold mt-2">
                    New <span className="text-white">2023</span>
                </p>
                <div className="flex flex-row mt-4 gap-2 items-center">
                    <p className="text-white text-xs lg:text-sm">
                        {data.duration}
                    </p>
                </div>
                <div className="flex flex-row mt-4 gap-2 items-center">
                    <p className="text-white text-xs lg:text-sm">
                        {data.genre}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard