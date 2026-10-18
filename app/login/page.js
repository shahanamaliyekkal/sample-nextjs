'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Login() {
    const router=useRouter()
    function routerHandler(){
        router.push('/')
    }
    function routHandler(){
        router.back()
    }
  return (
    <div className="login-container">
        <h1>Login page</h1>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <button onClick={routerHandler}>Login</button>
        <button>Back</button>
    </div>
  )
}
