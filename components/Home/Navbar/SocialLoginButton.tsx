"use client";
import { signIn } from "next-auth/react"

export const SocialLoginButton = ({provider, ...props} : {provider?:string} & React.ButtonHTMLAttributes<HTMLButtonElement>)=> {
    return <button {...props} onClick={()=> signIn(provider)}>로그인</button>
}
