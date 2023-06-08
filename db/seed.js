import fs from "fs";
import axios from "axios";
import dotenv from "dotenv";
import newsRaw from "../data/news.json" assert { type: "json" };
import categoryRaw from "../data/category.json" assert { type: "json" };
import News from "../models/News.js";
import Category from "../models/Category.js";

dotenv.config();

const API_KEY = process.env.CURRENTS_API_KEY;

// getting data form 3rd party api
async function consumeNewData() {
  try {
    // Make the API request for latest news
    const latestNewsUrl = `https://api.currentsapi.services/v1/latest-news?apiKey=${API_KEY}`;

    const response = await axios.get(latestNewsUrl);

    // Save the data to news.json
    const data = JSON.stringify(response.data.news, null, 2);
    fs.writeFileSync("data/news.json", data);

    console.log("Data fetched and saved!");
  } catch (error) {
    console.error("Failed to seed data:", error);
  }
}
// category api not avaiable: i saved data manualy by getting it form currentsapi website
// async function consumeCategoryData() {
//   try {
//     const categoryUrl = `https://api.currentsapi.services/v1/available/category?apiKey=${API_KEY}`;
//     console.log("fatching category Data.")
//     const response = await axios.get(categoryUrl);

//     // Save the data to category.json
//     const data = JSON.stringify(response.data.news, null, 2);
//     fs.writeFileSync('data/category.json', data);

//     console.log('Data fetched and saved!');
//   } catch (error) {
//     console.error('Failed to seed data:', error);
//   }
// }

const newsData = newsRaw.map((data) => {
  const newNews = {};
  newNews.title = data.title;
  newNews.description = data.description;
  newNews.url = data.url;
  newNews.author = data.author;
  newNews.image = data.image;
  newNews.language = data.language;
  newNews.category = data.category;
  newNews.published = data.published;
  return newNews;
});

// News.create(newsData)
//   .then((news) => {
//     console.log(news);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const categoriesData = categoryRaw.categories.map((data) => {
  const newCategory = {};
  newCategory.name = data;
  return newCategory;
});

Category.create(categoriesData)
  .then((docs) => {
    console.log(docs);
  })
  .catch((err) => {
    console.log(err);
  });