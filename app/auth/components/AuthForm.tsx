"use client";

import Input from "@/app/components/input/Input"
import { useCallback, useState } from "react";


const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant(prevState=> prevState === 'register' ?  'login': 'register')
  }, [])

  return (
    <div className="flex justify-center">
        <div className="
            bg-black 
            bg-opacity-70
            p-16 
            self-center
            mt-2
            lg:w-2/5
            lg:max-w-md
            rounded-md
            w-full
        ">
            <h2 className="
                text-white 
                text-4xl 
                mb-8 
                font-semibold
            ">
                { variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
                { variant === "register" && (
                <Input 
                    label="Username"
                    onChange={(e) => {setName(e.target.value)}}
                    id="name"
                    value={name}
                />)
                }
                <Input 
                    label="Email"
                    onChange={(e) => {setEmail(e.target.value)}}
                    id="email"
                    type="email"
                    value={email}
                />
                <Input 
                    label="Password"
                    onChange={(e) => {setPassword(e.target.value)}}
                    id="password"
                    type="password"
                    value={password}
                />
                <button className="
                    bg-red-600 
                    py-3 
                    text-white
                    rounded-md 
                    w-full
                    mt-10
                    hover:bg-red-700
                    transition
                ">
                    { variant === "login" ? "Login" : "Sign up"}
                </button>
                <p  onClick={toggleVariant}
                    className="text-neutral-500 mt-12">
                    { variant === "login" ? "First time using Netflix?" : "Already have you an account ?"}
                    <span className="text-white hover:underline cursor-pointer ml-2">
                        { variant === "login" ? "Create an account" : "Login"}
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default AuthForm