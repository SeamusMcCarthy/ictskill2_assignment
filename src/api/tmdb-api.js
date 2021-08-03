export const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

// Removed the descending sort as the result set appeared to exactly match the "discover" page so instead I'm sorting in ascending order
export const getPopularMovies = async () => {
  const response = await  fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity&api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  )
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getUpcomingMovies = async () => {
  const response = await  fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  )
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
  
export const getMovie = async ( args ) => {
  // console.log(args)
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
  
export const getGenres = async () => {
  const response = await  fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  )
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};
  
export const getMovieImages = async ({queryKey}) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getActorImages = async ({queryKey}) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

export const getMovieCast = (id) => {
  console.log("Retrieving cast details");
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.cast;
    });
};

export const getProfile = async ( args ) => {
  // console.log(args)
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};


export const getDiscography = async ({queryKey}) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = queryKey;
  console.log("Retrieving discography");
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((json) => {
      console.log("JSON : " + id + " " + json.cast);
      return json.cast;
    });
};