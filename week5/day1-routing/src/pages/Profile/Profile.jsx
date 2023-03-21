import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Profile = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}`)
    .then(res => res.json())
    .then(data => {
        setCharacter(data);
    })
  }, []);

  useEffect(() => {
    if(character !== null){
        setLoading(false);
    }
  }, [character])

  return (
    <>
        {loading ? <Loader /> : 
            <div>
                <Link to="/list">Go back</Link>
                <h1>{character.name}</h1>
                <p>Height: {character.height}</p>
                <p>Skin Color: {character.skin_color}</p>
                <p>Hair Color: {character.hair_color}</p>
                <p>Eye Color: {character.eye_color}</p>
            </div>
        }
    </>
  );
};

export default Profile;
