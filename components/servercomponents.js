import React,{Fragment} from "react"
import style from "./Todo.module.css";
import { Todobutton } from "./clientcomponents";


export const Todotask=({title,description,id,completed})=>{
    return(
        <Fragment>
            <section className={style.todosection1}>
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>

                <div><Todobutton id={id} completed={completed}/></div>
            </section>
        </Fragment>
    )
}