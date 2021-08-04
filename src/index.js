import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; 
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"; 
import PopularMoviesPage from "./pages/popularMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import CastPage from "./pages/movieCastPage";
import DiscoPage from "./pages/discoPage";
import ProfilePage from "./pages/profilePage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import LoginPage from "./pages/loginPage";
import PrivateRoute from "./privateRoute";
import AuthProvider from "./contexts/authContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <SiteHeader />      {/* New Header  */}
          <MoviesContextProvider>
            {" "}
            <Switch>
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <PrivateRoute exact path="/movies/popular" component={PopularMoviesPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route exact path="/movies/:id/cast" component={CastPage} />
              <Route exact path="/movies/:id/disco" component={DiscoPage} />
              <Route exact path="/movies/:id/profile" component={ProfilePage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));