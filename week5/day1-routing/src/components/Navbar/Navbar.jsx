import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    padding: 24px 0;
    ul{
        display:flex;
        gap: 12px;
        align-items: center;
        li{
            list-style: none;
            &:first-child{
                margin-right: auto;
            }
            a{
                text-decoration: none;
                color: white;
                &:active{
                    color:orange;
                }
            }
        }
    }
`;

const Navbar = () => {
  return (
    <Nav>
        <ul>
            <li>
                <h1>Logo</h1>
            </li>
            <li>
                {/* we are not using <a></a> its refreshing the page after route which we shouldn't refresh the page in react applications */}
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to={"/about"} >About</Link>
            </li>
            <li>
                <Link to={"/list"} >List</Link>
            </li>
        </ul>
    </Nav>
  )
}

export default Navbar