import React from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'

export default function Navbar() {
    return (
        <Nav>
            <div className='title'>
                <h4>Hi Johnson,</h4>
                <h1>Welcome to <span>My Taxi DASHBOARD</span></h1>
            </div>
            <div className='nav-items'>
                <BiSearch />
                <input type="text" placeholder='Search' />
            </div>
        </Nav>
    )
}

const Nav = styled.nav`

`