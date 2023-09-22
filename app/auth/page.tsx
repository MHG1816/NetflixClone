import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div className="
        relative
        h-full
        w-full
        bg-[url('/images/hero.jpg')]
        bg-no-repeat
        bg-fixed
        bg-cover
    ">
        <div className="
            bg-black
            w-full
            h-full 
            lg:bg-opacity-50
        ">
            <nav className="px-12 py-5">
                <Image 
                    src="/images/logo.png"
                    alt="Logo"
                    width={100}
                    height={48}
                />
            </nav>
            <AuthForm />
        </div>
    </div>
  )
}

export default Auth