import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getPopularMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'

const PopularPage = (props) => {

  const { data, error, isLoading, isError }  = useQuery('popular', getPopularMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title='Popular Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};
export default PopularPage;