import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationList() {
  
  const [locations, setLocations] = useState([]);
  
  useEffect(() => {
    const getLocations = () => {
      axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then((res) => setLocations(res.data.results));
    };
    getLocations();
  }, []);
  console.log(locations);
  return (
    
  <div className="grid-view">
    {
      
      locations.map(location => (
        <LocationCard key = {location.id} location = {location} />
      ))
    }
  </div>
  )
}
