import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getTopRated } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const TopRated = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('toprated', getTopRated)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const TopRatedmovies = data.results;
  
  return (
    <PageTemplate
      title='Top Rated Movies'
      movies={TopRatedmovies}


     action={(movie) => {
      
    }}

    />
  );
};
export default TopRated;