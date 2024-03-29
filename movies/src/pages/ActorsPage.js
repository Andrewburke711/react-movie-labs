import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularActors } from '../api/tmdb-api';

const ActorsPage = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchPopularActors().then(data => {
      setActors(data);
    });
  }, []);

  return (
    <div>
      <h1>Popular Actors</h1>
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

export default ActorsPage;