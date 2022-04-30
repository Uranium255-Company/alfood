import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const PhoneNavbar = () => {
    const [active, setActive] = useState(false)
    return (
        <>
        <div className='sm:hidden' style={{height: '71px'}}></div>
            <div id='phone-navbar' className={active ? 'active' : ''}>
                <div className='phone-navbar-controls'>
                    <button id='navbar-btn' className={`m-1 p-1 ${active ? 'active' : ''}`}  onClick={() => {setActive(!active)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-red-500" viewBox="0 0 24 24"  strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className='flex px-4 h-full py-3 items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    </div>
                </div>
                <div className={`navbar-sliders ${active ? 'active' : ''}`}>
                    <NavLink to='/' className="slider">
                        <h1>Home</h1>
                    </NavLink>
                    <NavLink to='/babanimg' className="slider">
                        <h1>Babanimg</h1>
                    </NavLink>
                    <NavLink to='/mareadriatik' className="slider">
                        <h1>Mareadriatik</h1>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
export default PhoneNavbar;