import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { withRouter } from "react-router-dom";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getDiscography} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const DiscoPage = (props) => {
  const { id } = props.match.params;
   
  const { data, error, isLoading, isError } = useQuery(
    ["discography", {id: id }], getDiscography
  );
  
  const movies = data;
  console.log("Discography : " + movies); 

  if (isLoading) {
    return <Spinner />;
  };

  if (isError) {
    return <h1>{error.message}</h1>;
  };

  return (
    <PageTemplate
      title="Discography"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />    
  );
};

export default withRouter(DiscoPage);