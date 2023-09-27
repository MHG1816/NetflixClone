"use client";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
import useMovie from "@/app/hooks/useMovie";

interface HeaderProps {
    movieId?: string;
}
const Header : React.FC<HeaderProps> = ({ movieId }) => {
    const { data } = useMovie(movieId as string);
    return (
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
      <AiOutlineArrowLeft className="text-white" size={40} />
    </nav>
  );
};

export default Header;
