import express from "express";
const categoryRouter = express.Router();
import {
  getAllCategories,
  getCategoryByName,
} from "../controllers/categoryController.js";

// Route to get all categories
categoryRouter.get("/all", function (req, res) {
  const response = getAllCategories(req, res);
  return response;
});

// Route to get a category by name
categoryRouter.get("/:name", function (req, res) {
  const response = getCategoryByName(req, res);
  return response;
});

export default categoryRouter;
