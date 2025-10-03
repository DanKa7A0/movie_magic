# movie_magic
Express JS backend project


## Development steps

## Part 1 - express js
### Setup
 - [x] Initialize Project
 - [x] Add Express Server `npm i express`
 - [x] Config debugging
 - [x] Add Workshop Resources
 - [x] Setup Handlebars `npm i express-handlebars`
 - [x] Setup static files
 - [x] Render Home Page
 - [x] Add Layout
 - [x] Render About Page
### Architecture and dynamic rendering
 - [x] Add home controller
 - [x] Add routes
 - [x] Add movie service
 - [x] Add movie model
 - [x] Render movies on home page
 - [x] Show no movies screen
### Create Movie
 - [x] Add Movie Controller
 - [x] Show create movie page
 - [x] Ready body data
 - [x] Create movie
   - [x] Add action
   - [x] Add service
   - [x] Add model method for creating movie
 - [x] Redirect after creation
 - [x] Add unique if for each cerated movie
### Details
 - [x] Add navigation button for detail page
 - [x] Add route with param for details page
 - [x] GetOne movie from service
 - [x] Find movie by id from model
 - [x] Render details page with dynamic data
### Search
 - [x] Show static search page
 - [x] Render all movies
 - [x] Modify search form
 - [x] Filter movies
   - [x] By year
   - [x] By genre
   - [x] By title 
 - [x] Remember search words
### Bonuses
 - [x] Dynamic page title
 - [x] Rating (temp solution)
 - [x] File Persistance
 - [x] Add 404 page


## Part 2 - mongoDB
### Change file persistance with mongo db
- [x] Install mongoose
- [x] Connect to db
- [x] import data
- [x] Create movie model for mongodb
- [x] Fix home controller to read from mongodb
- [x] Fix details page
- [x] Fix create page
- [x] Fix search page

### Create cast page
- [x] Import new resoureses
- [x] Add nav button
- [x] Create cast controller
- [x] Render page
- [x] Create post create cast
- [x] Create cast services
- [x] Create cast model

### Attach cast
- [x] Add button redirect to attach page
- [x] Render attach page
- [x] Read all casts from db
- [x] Make dynamic attach page 
- [x] Make relation in movies to ref casts
- [x] Save cast to movie


### Update details page
- [x] Add new html for casts
- [x] Render dynamic casts for movie
- [ ] Get casts for concrect movie


### Bonus
- [ ] Show casts that's not added to movie
- [ ] Move details pages to folder
- [ ] Set name in movie when attach cast to movie
