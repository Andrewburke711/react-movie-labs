import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorMovies } from '../api/tmdb-api';

const ActorDetailsPage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchActorMovies(id).then(data => {
      setMovies(data.cast);
    });
  }, [id]);

  return (
    <div>
      <h1>Movies Featuring Actor ID: {id}</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActorDetailsPage;
