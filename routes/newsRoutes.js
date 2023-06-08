import express from "express";
const newsRouter = express.Router();
newsRouter.use(express.json());
import {addNews, deleteNews, getAllNews, getNewsById, updateNews, getNewsByCategoryName} from "../controllers/newsController.js";




// API
newsRouter.get("/get", getAllNews);
newsRouter.get("/get/:id", getNewsById);
newsRouter.get("/getByCategory/:categoryName", getNewsByCategoryName);
newsRouter.post("/add", addNews);
newsRouter.put("/update/:id", updateNews);
newsRouter.delete("/delete/:id", deleteNews);

export default newsRouter;