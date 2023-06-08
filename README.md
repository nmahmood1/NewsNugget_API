# NewsNugget Backend

## Overview
This is the backend repository for the NewsNugget application. This repository contains the server-side code for the NewsNugget news aggregation platform. It's built on a Node.js and Express.js server, with MongoDB as the database and Mongoose for data modeling and database interactions. The backend is responsible for handling API requests, integrating with a third-party API, and managing the database. The server communicates with the News API and serves data to the frontend.

## Project Setup

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/nmahmood1/NewsNugget_API.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`

Make sure to have Node.js and MongoDB installed on your local machine.
- Frontend GitHub Repository: [NewsNugget Frontend Repo](https://github.com/nmahmood1/NewsNugget_frontend)

## API Endpoints

The NewsNugget backend provides the following RESTful API endpoints:

- `GET /news/get`: Retrieves all news articles from the database.
- `GET /news/getByCategory/:category`: Retrieves news articles based on the specified category.
- `GET /news/get/:id`: Retrieves a specific news article by its ID.
- `POST /news/add`: Adds a new news article to the database.
- `PUT /news/update/:id`: Updates an existing news article in the database.
- `DELETE /news/delete/:id`: Deletes a news article from the database.
- `GET /categories/all`: Retrieves all available news categories.
- `GET /categories/:name`: Retrieves specific news category by name.


## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

## Deployment

The NewsNugget application is deployed on the following platforms:

- Frontend (Netlify): [NewsNugget Frontend](https://exquisite-cranachan-1164b2.netlify.app/)
- Backend (Heroku): [NewsNugget Backend](https://murmuring-badlands-02250.herokuapp.com/)



## API Documentation

For details on the backend API this client interacts with, please see the [NewsNugget API](https://currentsapi.services/en/docs/).