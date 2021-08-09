import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; 
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"; 
import PopularMoviesPage from "./pages/popularMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import CastPage from "./pages/movieCastPage";
import DiscoPage from "./pages/discoPage";
import ProfilePage from "./pages/profilePage";
import LoginPage from "./pages/loginPage";
import Signup from "./pages/signup"
import Profile from "./pages/profile"
import ForgotPassword from "./pages/forgotPassword"
import UpdateProfile from "./pages/updateProfile"
import AddMovieReviewPage from './pages/addMovieReviewPage';

import AuthProvider from "./contexts/authContext";
import MoviesContextProvider from "./contexts/moviesContext";

import PrivateRoute from "./privateRoute";
import SiteHeader from './components/siteHeader';

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
          <SiteHeader />
          <MoviesContextProvider>
            {" "}
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
              <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
              <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <PrivateRoute exact path="/movies/popular" component={PopularMoviesPage} />
              <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <PrivateRoute exact path="/movies/:id/cast" component={CastPage} />
              <PrivateRoute exact path="/movies/:id/disco" component={DiscoPage} />
              <PrivateRoute exact path="/movies/:id/profile" component={ProfilePage} />
              <PrivateRoute path="/movies/:id" component={MoviePage} />
              <PrivateRoute exact path="/" component={HomePage} />
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