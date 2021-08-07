# Assignment - ReactJS app.

Name: Seamus McCarthy

## Overview.

Extended the Movies app to provide some additional views and basic authentication (based on routing samples). Some of the views can be accessed from the navigation bar
where others are linked from movie/cast-member cards.
 
 New features include:

 + A view of popular movies. (Note that as this was returning the same list as the Upcoming view, I removed the descending sort in the API call to show the difference).
 + Each movie card now has a button to view the cast members.
 + Each cast member card has 2 buttons - Profile and Discography.
 + The Profile page contains a number of items - actor specific images, a bio and chips detailing date of birth and hometown.
 + The Discography page lists all movies the actor has worked on and re-uses the movie-related components (filter results, adding to favourites etc).
 + Basic authentication is required to access the "Upcoming" and "Popular" pages. This has been applied as per sample9 of the routing samples provided.

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

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

+ Get /movies/upcoming (protected) - displays upcoming movies
+ Get /movies/popular (protected) - displays popular movies in ascending order
+ Get /movies/:id/cast - displays the cast members
+ Get /movies/:id/disco - displays an actor discography
+ Get /movies/:id/profile - displays an actor's profile page
+ Get /login - displays a basic login page

## Independent learning (If relevant).

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) ......... 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png