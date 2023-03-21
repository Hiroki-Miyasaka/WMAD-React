import React, { useState, useEffect } from 'react'
import Loader from '../../components/Loader/Loader';
import StarWarsCard from '../../components/Card/StarWarsCard';
import styled from "styled-components";

const WrapperOfCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
  button {
    margin: 0 3px;
    padding: 6px 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover{
      background-color: #dedede;
      color: #000;
    }
  }
`;

const PaginationButton = styled.button`
  background-color: ${props => props.currentPage ? "#000" : "#cecec"};
`;


const ListPage = () => {
  const [characters, setCharacters] = useState([]);
  const [countOfCharacters, setCountOfCharacters] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageInformation, setPageInformation] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${pageInformation}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCountOfCharacters(data.count);
      setCharacters(data.results);
    })
  }, [pageInformation]);

  useEffect(() => {
    if(characters.length !== 0){
      setLoading(false);
    }
  }, [characters]);

  const createPagination = () => {
    const pagination = [];
    const numberOfPages = Math.ceil(countOfCharacters / 10);

    for(let i = 1; i <= numberOfPages; i++){
      pagination.push(i);
    }

    return pagination;
  }

  const displayCharacters = characters.map((character, index) => <StarWarsCard key={index} id={index + 1} name={character.name} description={character.height} />)

  return (
    <div>
      <h2 style={{marginBottom: `24px`}}>List Page</h2>
      {
      loading 
      ? <Loader /> 
      : <WrapperOfCards>{displayCharacters}</WrapperOfCards>
      }
      <Pagination>
        <button onClick={() => setPageInformation(prevPage => prevPage > 1 ? prevPage - 1 : prevPage)}>Prev</button>

        {createPagination().map((page, index) => {
          return <PaginationButton currentPage={page === pageInformation} key={index} onClick={() => setPageInformation(page)}>{page}</PaginationButton>
        })}

        <button onClick={() => setPageInformation(prevPage => prevPage < createPagination().length ?  prevPage + 1 : prevPage)}>Next</button>
      </Pagination>
    </div>
  )
}

export default ListPage