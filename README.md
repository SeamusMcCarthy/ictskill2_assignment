# Assignment - ReactJS app.

Name: Seamus McCarthy

## Overview.

Extended the Movies app to provide some additional views and Firebase authentication. Some of the views can be accessed from the navigation bar
where others are linked from movie/cast-member cards. All routes (bar login and signup pages) are now protected until the user logs in.
 
 New features include:

 + Firebase Authentication including Login, Signup, User Profile (which allows logout) and Reset Password pages. 
 + A view of "Popular" movies. Note that as this view was returning the same list as the "Upcoming" view, I removed the descending sort in the API call to show the difference.
 + Each returned movie card now has a button to view the cast members.
 + Each new cast member card has 2 buttons - Profile and Discography.
 + The Profile page contains a number of items - actor specific images, a biography and chips detailing their date of birth and hometown.
 + The Discography page lists all movies the actor has worked on and re-uses the movie-related components (filter results by text/genre, adding to favourites etc).

## Setup requirements.

After cloning the repo, use "npm install" to install dependencies and "npm start" to run the app.

## API Data Model.

Endpoints:
+ Get popular movies - /discover/movie?sort_by=popularity&api_key=<<api_key>>&language=en-US&include_adult=false&page=1
+ Get movie cast - movie/{id}/credits?api_key=<<api_key>>&language=en-US
+ Get actor profile - /person/{person_id}?api_key=<<api_key>>&language=en-US
+ Get actor images - /person/{id}/images?api_key=<<api_key>>
+ Get discography - /person/{id}/combined_credits?api_key=<<api_key>>&language=en-US&page=1

## App Design.

### Component catalogue.

Storybook component testing with new/amended stories highlighted

![][stories]

### UI Design.

![][login]
>Allows the user to login or switch to the Sign Up or Forgot Password pages

![][signup]
>Allows the user to signup or switch to the Login page

![][password]
>Allows the user to request a password reset

![][update]
>Allows the user to log out or opt to update their email/password details

![][updatedtls]
>Allows the user to enter the amended details

![][popular]
>Displays a list of popular moves (in ascending order) and this view also shows the new 'Cast' button on the movie card

![][cast]
>Displays the movie cast

![][actorprofile]
>Displays some details about the actor

![][disco]
>Shows the actor's discography

### Routing.

+ Get /movies/upcoming (protected) - displays upcoming movies
+ Get /movies/popular (protected) - displays popular movies in ascending order
+ Get /movies/:id/cast - displays the cast members
+ Get /movies/:id/disco - displays an actor discography
+ Get /movies/:id/profile - displays an actor's profile page
+ /login - displays a basic login page with options to link to the Signup and Forgot Password pages
+ /signup - displays a basic sign up page with an option to switch to the login page
+ /forgot-password - allows the user to enter the email address which will result in them being sent a link to reset their password
+ /profile - allows the user to log out or link to update their details
+ /update-profile - allows the user to update their email address or password

## Independent learning (If relevant).

Firebase authentication was studied in the following YouTube tutorial - https://www.youtube.com/watch?v=PKwu15ldZ7k
This included using Bootstrap for the Login/Signup/Profile/Reset Password pages rather than Material UI. I left these in to show that a 2nd library had been looked into.


[login]: ./Git-images/login.png
[signup]: ./Git-images/signup.png
[profile]: ./Git-images/profile.png
[disco]: ./Git-images/discography.png
[cast]: ./Git-images/cast.png
[actorprofile]: ./Git-images/actorprofile.png
[password]: ./Git-images/password.png
[popular]: ./Git-images/popular.png
[update]: ./Git-images/update.png
[updatedtls]: ./Git-images/updateDtls.png
[stories]: ./Git-images/storybook.png