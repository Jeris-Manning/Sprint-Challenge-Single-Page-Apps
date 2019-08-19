import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  
  const [episodes, setEpisodes] = useState([]);
  
  useEffect(() => {
    const getEpisodes = () => {
      axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then((res) => setEpisodes(res.data.results));
    };
    getEpisodes();
  }, []);
  
  return (
    
  <div className="grid-view">
    {
      
      episodes.map(episode => (
        <EpisodeCard key = {episode.id} episode = {episode} />
      ))
    }
  </div>
  )
}
