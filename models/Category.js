import mongoose from "../db/connection.js";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "News",
    },
  ],
});

const Category = mongoose.model("Category", CategorySchema);
export default Category;
