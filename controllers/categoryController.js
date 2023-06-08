import Category from "../models/Category.js";

export async function getAllCategories(req, res) {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getCategoryByName(req, res) {
  try {
    const category = await Category.findOne({ name: req.params.name });
    if (category == null) {
      return res.status(404).json({ message: "Cannot find category" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};