# Project Proposal

## Project Goal and Purpose

The goal of the NewsNugget project is to provide users with the latest news from around the world, categorized by topic. Users can browse articles, save their favorite articles. The purpose is to offer a centralized platform for news consumption.

## Project Name and Description

**NewsNugget** - A dynamic news aggregation platform that retrieves news data from various sources using the third-party News API. The application is built on a Node.js and Express.js server, with MongoDB as the database for storing user data and Mongoose for data modeling and database interactions. It provides users with the ability to browse news by category and save their favorite articles.

## Routes and Models

- GET /articles: Retrieves all articles
- GET /articles/:category: Retrieves articles by category
- GET /users/:username/articles: Retrieves saved articles of a user
- POST /users/:username/articles: Saves an article for a user
- PUT /users/:username: Updates user's profile information
- DELETE /users/:username/articles/:articleId: Removes an article from a user's saved list


## User Stories

- As a user, I should be able to view the latest news articles.
- As a user, I should be able to browse news articles by category.
- As a user, I should be able to save interesting articles for later viewing.

## MVP Goals

- Integrate with NewsAPI to fetch news articles
- Browse news articles by category
- Save and retrieve user's favorite articles

## Stretch Goals

- Implement a search function for news articles
- Implement a comment section where users are able to post comments and engage with the community
- Enhance the UI/UX design for better user engagement
- User registration and and maintenance of user profiles
