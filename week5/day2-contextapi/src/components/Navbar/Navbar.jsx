import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeContext from '../../context/ThemeContext';

const Nav = styled.nav`
    display: flex;
    align-items:center;
    padding: 1rem 2rem;
    background-color: ${props => props.theme === "light" ?  "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff" };
    ul{
        display: flex;
        list-style: none;
        gap: 1.5rem;
    }
    h1{
        font-size: 1.5rem;
        margin-right: auto;
    }
    button {
        margin-left: 1rem;
        padding: 0.5rem 1rem;
        border:none;
        border-radius: 0.25rem;
        cursor: pointer;
        color: ${props => props.theme === "light" ? "#fff" : "#333" };
        background-color: ${props => props.theme === "light" ?  "#333" : "#fff"};
    }
    a {
        text-decoration: none;
        color: ${props => props.theme === "light" ? "#333" : "#fff" };
    }
`;

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Nav theme={theme}>
        <h1>Logo</h1>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/portfolio"}>Portfolio</Link>
            </li>
            <li>
                <Link to={"/contact"}>Contact</Link>
            </li>
        </ul>
        <button onClick={toggleTheme}>
            {theme === "light" ? "Dark" :  "Light"}
        </button>
    </Nav>
  )
}

export default Navbar