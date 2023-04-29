"use client";

import React,{Fragment,useState} from 'react'
import style from "./register.module.css"
import Link from 'next/link';

export const metadata={
    title:"Register Page",
    description:"this is a login page"
}

const page = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [status,setStatus]=useState(null);


    const handlesubmit=async(e)=>{
        e.preventDefault();

        try {
            const res=await fetch(`/api/newtask`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({
                    email:email,
                    password:password
                })
            })
            
        } catch (error) {

            setStatus(error)
            console.log(error)
        }
    }
  return (
    <Fragment>
        <section className={style.registersection1}>
            <div>
                <h4>Register</h4>
                <form onSubmit={handlesubmit}>
                    <div>
                        <input type="email"
                        required 
                        placeholder='Please enter your name'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        autoComplete='off'
                        />
                    </div>
                    <div>
                        <input type="password"
                        required
                        placeholder='Please enter your password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Register" />
                    </div>
                    <div>
                        <p>Already Register</p>
                        <Link href={`/login`}>Login</Link>
                    </div>
                </form>
            </div>
        </section>
    </Fragment>
  )
};




export default page