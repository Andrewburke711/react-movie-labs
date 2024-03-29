import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchFamousActors } from '../api/tmdb-api';

const FamousActorsPage = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const getFamousActors = async () => {
      try {
        const actorsData = await fetchFamousActors();
        setActors(actorsData);
      } catch (error) {
        console.error('Error fetching famous actors:', error);
      }
    };

    getFamousActors();
  }, []);

  return (
    <div>
      <h1>Famous Actors</h1>
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <Link to={`/actors/${actor.id}`}>{actor.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FamousActorsPage;
