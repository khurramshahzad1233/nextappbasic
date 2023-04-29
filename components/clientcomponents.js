"use client";

import { Fragment } from "react"
import {createContext,useContext,useState} from "react"
import style from "../app/Header.module.css"
import Link from "next/link";
import style1 from "./Login.module.css";
import style2 from "./Homeform.module.css"
import style3 from "./Todo.module.css"




const Headercontext=createContext();
export const Headerprovider=({children})=>{

    const [user,setUser]=useState("");
    return(
        <Headercontext.Provider value={{user,setUser}}>
            {children}
            </Headercontext.Provider>
    )
}

// export const Headerstate=()=>{
//     return useContext(Headercontext)
// }



export const Logoutbtn=()=>{
    
    const {user}=useContext(Headercontext);
    const logouthandler=()=>{
        alert("logout successfully")
    }
    return(
        <Fragment>
            {user.id?<>hellow</>:<>nohellow</>}
            <button onClick={logouthandler} className={style.logoutbtn}>Logout</button>
        </Fragment>

    )
}


export const Logincomponent=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")

    return(
        <Fragment>
        <section className={style1.loginsection}>
            <div>
                <h4>Login Form</h4>
                <form>
                    <div>
                    <input type="email"
                    required
                    placeholder='Please enter your email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}

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
                    <input type="submit"
                    value="Login"
                    />
                    </div>
                    <div>
                        <p>
                            <Link href={`/register`}>New User</Link>
                        </p>
                    </div>
                                        
                </form>
            </div>
        </section>
    </Fragment>
    )
};



export const Homeform=()=>{
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("")
    return(
        <Fragment>
            <section className={style2.homeformsection}>
                <div>
                    <h4>ToDo Form</h4>
                    <form>
                        <div>
                            <input type="text"
                            required
                            placeholder="Task Title"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="text"
                            required
                            placeholder="Task Description"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="submit" value="Submit Task" />
                        </div>
                    </form>
                </div>

            </section>
        </Fragment>
    )
}

export const Todobutton=({id,completed})=>{

    const deletehandler=(id)=>{
        alert("deleted successfully")

    }
    return(
        <Fragment>
            <section className={style3.todobtnsection}>
                <input type="checkbox"
                checked={completed}
                className={style3.checkboxbtn}
                />

                <button onClick={(e)=>deletehandler(id)}>Delete</button>

            </section>
        </Fragment>
    )
}