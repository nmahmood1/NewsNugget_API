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

const categoriesData = categoryRaw.categories.map((data) => {
  const newCategory = {};
  newCategory.name = data;
  return newCategory;
});

// Seed the database
async function seedDatabase() {
  try {
    // Create categories first
    const categories = await Category.create(categoriesData);

    // Create a map for quick category lookups
    const categoryMap = {};
    categories.forEach((cat) => {
      categoryMap[cat.name] = cat._id;
    });

    // Now, create news data
    for (const newsItem of newsData) {
      // Find the category ID
      const categoryId = categoryMap[newsItem.category];

      if (categoryId) {
        // Create the news
        const newsDoc = await News.create({
          ...newsItem,
          category: categoryId,
        });

        // Now, find the category document and update it
        const categoryDoc = await Category.findById(categoryId);
        categoryDoc.articles.push(newsDoc._id);
        await categoryDoc.save();
      } else {
        console.error(`Category not found for news item: ${newsItem.title}`);
      }
    }
  } catch (error) {
    console.error("Failed to seed data:", error);
  }
}

// Call your new function
seedDatabase();
