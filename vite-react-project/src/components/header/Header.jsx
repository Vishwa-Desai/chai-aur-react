import React from 'react'
import { Link,NavLink } from 'react-router-dom';
function Header() {
  return (
    <>
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                      <li>
                            <NavLink to="/home">
                                Home
                            </NavLink>
                      </li>
                      <li>
                            <NavLink to="/about">
                                About
                            </NavLink>
                      </li>
                      <li>
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                      </li>
                      <li>
                            <NavLink to="/github">
                                Github
                            </NavLink>
                      </li>
                  </ul>
            </nav>
        </header>
        
    </>
  )
}

export default Header