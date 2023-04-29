import React,{Fragment} from 'react'
import style from "./Header.module.css"
import Link from 'next/link'
import { Logoutbtn } from '@/components/clientcomponents'
// import { Headerstate } from '@/components/clientcomponents'

const Header = () => {

  // const {user,setUser}=Headerstate();

  // console.log(user)
  return (
    <Fragment>
      <section className={style.headersec1}>
        <div>website log</div>
        <ul>
          <li><Link href={`/`}>home</Link></li>
          <li><Link href={`/about`}>about</Link></li>
          <li><Link href={`/services`}>services</Link></li>
          <li><Logoutbtn/></li>
        </ul>
      </section>
    </Fragment>
  )
}

export default Header