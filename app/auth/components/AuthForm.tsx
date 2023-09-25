"use client";

import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";

import SocialConnexions from "./SocialConnexions";
import Input from "@/app/components/input/Input"


const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant(prevState=> prevState === 'register' ?  'login': 'register')
  }, []);

  const login = useCallback(async () => {
    try {
        setLoading(true)
        await signIn('credentials', {
            email,
            password,
            callbackUrl: "/profile"
        });
        setLoading(false);
    }catch(error) {
        console.error(error)
    }
  }, [email, password])

  const register = useCallback(async () => {
    try {
        await axios.post("/api/register", {
            email,
            name,
            password
        }).then(() => setLoading(false))
        .finally(() => setLoading(false));
        login();
    } catch (error) {
        console.error(error)
    }
  }, [email, name, password, login])

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
                <button className={`
                    py-3 
                    text-white
                    rounded-md 
                    w-full
                    mt-10
                    hover:bg-red-700
                    transition ${loading ? "bg-red-900 cursor-not-allowed" : "bg-red-600 cursor-pointer"}`
                    }
                    disabled={loading}
                    onClick={variant === "login" ? login : register }
                >
                    { variant === "login" ? "Login" : "Sign up"}
                </button>
                <SocialConnexions />
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