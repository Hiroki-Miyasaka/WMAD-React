import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 6px;
    padding: 24px 12px 12px 12px;
    border: 1px solid #dedede;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const CardTitle = styled.h2`
    text-align:center;
`;

const CardDescription = styled.p`
    margin: 6px 0;
`;

const CardButton = styled.button`
    width: 100%;
    height: 32px;
`;



const StarWarsCard = (props) => {
    const navigate = useNavigate();

    const gotoProfile = (id) => {
        navigate(`/list/${id}`);
    }

  return (
    <Card>
        <CardTitle >{props.name}</CardTitle>
        <CardDescription>Height: {props.description} cm</CardDescription>
        <CardButton onClick={() => gotoProfile(props.id)}>Discover</CardButton>
        {/* <Link to={}></Link> */}
    </Card>
  )
}

export default StarWarsCard