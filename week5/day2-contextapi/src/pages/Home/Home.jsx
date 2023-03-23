import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import styled from 'styled-components'
import AvatarCard from '../../components/AvatarCard/AvatarCard';
const HomeContainer = styled.div`
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    padding: 1rem 6rem;
`;

const SummaryTitle = styled.h1`
    max-width: 1082px;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 72px;

    letter-spacing: 1px;

    background: ${props => props.theme === "light" ? "linear-gradient(134.01deg, #333 5.75%, #4CA9FF 95.52%);" : "linear-gradient(134.01deg, #3BF686 40.75%, #4CA9FF 90.52%);"}
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;

const Home = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <HomeContainer theme={theme}>
        <SummaryTitle theme={theme}>Hi Im Joel, a special human with some ability to love learning and working on teamwork. </SummaryTitle>
        <AvatarCard />
    </HomeContainer>
  )
}

export default Home