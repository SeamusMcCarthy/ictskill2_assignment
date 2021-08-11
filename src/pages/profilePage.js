import React from "react";
import { withRouter } from "react-router-dom";
import ProfileDetails from "../components/profileDetails";
import PageTemplate from "../components/templateActorPage";
import { getProfile } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ProfilePage = (props) => {
  const { id } = props.match.params;
  const { data: actor, error, isLoading, isError } = useQuery(
    ["profile", { id: id }],
    getProfile
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ProfileDetails actor={actor} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for profile details</p>
      )}
    </>
  );
};

export default withRouter(ProfilePage);