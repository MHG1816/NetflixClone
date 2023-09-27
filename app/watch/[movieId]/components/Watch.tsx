"use client";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
import useMovie from "@/app/hooks/useMovie";

interface HeaderProps {
    movieId?: string;
}
const Header : React.FC<HeaderProps> = ({ movieId }) => {
    const { data } = useMovie(movieId as string);
    const router = useRouter();
    return (
    <>
      <nav
        className="
              fixed
              w-full
              p-4
              z-10
              flex
              flex-row
              items-center
              gap-8
              bg-black
              bg-opacity-70"
      >
        <AiOutlineArrowLeft 
          onClick={() => {router.back()}}
          className="text-white cursor-pointer" size={40}/>
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light mr-2">
              Watching:
          </span>
          {data?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="h-full w-full" 
        src={data?.videoUrl} 
      />
    </>
  );
};

export default Header;
