import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  
  const [charList, setCharList] = useState([]);
  

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then((res) => setCharList(res.data.results));
    };
    getCharacters();
  }, []);
  // TODO: Add AJAX/API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  console.log(charList);
  return (
  <div className="grid-view">
    {
      charList.map(character => (
        <CharacterCard key={character.id} character = {character} />
      ))
    }
  </div>
  )
}
