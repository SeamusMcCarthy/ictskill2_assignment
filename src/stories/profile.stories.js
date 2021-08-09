import React from "react";
import ProfileDetails from "../components/profileDetails";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Actor Profile Page/ProfileDetails",
  component: ProfileDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <ProfileDetails actor={SampleActor} />;

Basic.storyName = "Default";
