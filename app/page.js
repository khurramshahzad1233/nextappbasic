import React,{Fragment} from 'react'
import style from "./page.module.css"
import {Roboto} from "next/font/google"
import Image from 'next/image';
import { Homeform } from '@/components/clientcomponents';
import { Todotask } from '@/components/servercomponents';


const roboto=Roboto({
  subsets:["cyrillic"],
  weight:["400","700"]
})

const page = () => {
  return (
    <Fragment>
      <div className={roboto.className}>
        Home Page with a Font Roboto
   </div>
   <section><Homeform/></section>
   <section>
    <Todotask 
    title={"sample task"} 
    description={"sample description"}
    id={"sample id"}
    completed={true}
    />
    </section>
    </Fragment>
    
  )
}

export default page