import React from 'react';
import logo from '../../public/assets/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
const Navber = () => {
    const links = <>
    <li><Link href={'/'}>Home</Link></li>
    <li><Link href={'/about'}>About</Link></li>
    <li><Link href={'/service'}> Services</Link></li>
    <li><Link href={'/blog'}> Blog</Link></li>
    <li><Link href={'/contact'}> Contact</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 w-full max-w-5xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
        {links}
      </ul>
    </div>
    <Link href={'/'} className="btn btn-ghost text-xl">
        <Image src={logo} alt='logo' width={50} height={50}/>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <button className=" btn-outline btn text-red-600 ">Appointment</button>
  </div>
</div>
            
        </div>
    );
};

export default Navber;