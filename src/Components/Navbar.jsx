import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-main py-4 px-5">
            <div class="container">

                <a class="navbar-brand fs-3 fw-bold text-white" href="#">NIKE <img src='Images/Logo.png' className='img-fluid img-logo ' /></a>

                <button class="navbar-toggler bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 px-4">
                        <li class="nav-item px-2">
                            <a class="nav-link " aria-current="page" href="#">Men</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">Women</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">Kids</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">Customize</a>
                        </li>
                    </ul>

                    <div className='d-flex search py-2'>
                        <FiSearch style={{ width: 40, height: 20 }} className='search-icon' />
                        <input class=" border-0 fw-bold" type="search" placeholder="Search" />
                        
                    </div>
                    <FiShoppingCart style={{ width: 40, height: 25 }} />
                    
                    

                </div>

            </div>
        </nav>
    )
}

export default Navbar