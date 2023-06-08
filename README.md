# NewsNugget Backend

This is the backend repository for the NewsNugget application. It's built on a Node.js and Express.js server, with MongoDB as the database and Mongoose for data modeling and database interactions. The server is responsible for communicating with the News API and serving data to the frontend.

## Project Setup

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/<username>/NewsNugget-Backend.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`

## API Routes

* GET /articles: Retrieves all articles.
* GET /articles/:category: Retrieves articles by category.
* GET /users/:username/articles: Retrieves saved articles of a user.
* POST /users/:username/articles: Saves an article for a user.
* PUT /users/:username: Updates user's profile information.
* DELETE /users/:username/articles/:articleId: Removes an article from a user's saved list.

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

