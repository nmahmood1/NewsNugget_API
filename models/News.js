import mongoose from "../db/connection.js";

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  url:{
    type: String,
    required: true,
  },
  author:{
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  language:{
    type: String,
    required: false,
  },
  category: {
    type: Array,
    required: false,
  },
  published: Date,
});

const  News  = mongoose.model("News", NewsSchema);
export default News;