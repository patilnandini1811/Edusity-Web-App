import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {
const [sticky, Setsticky] = useState(false);
useEffect(()=>{
    window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? Setsticky(true) : Setsticky(false)
    })
},[])
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} ` }>
      <img src={logo} alt="logo" className='logo' />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
