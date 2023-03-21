import React from 'react'
import styled from "styled-components";

const CircleLoader = styled.div`
    border: 4px solid white; /* Light grey */
    border-top: 4px solid orange; /* Blue */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 0 auto;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap:20px;
`;

const Loader = () => {
  return (
    <Wrapper>
        <CircleLoader></CircleLoader>
        <p>Loading...</p>
    </Wrapper>
  )
}

export default Loader