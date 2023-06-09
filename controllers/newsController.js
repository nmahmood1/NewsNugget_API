import News from "../models/News.js";
import Category from "../models/Category.js";

// Controller for GET /news
export const getAllNews = (req, res) => {
  News.find()
    .then((docs) => {
      res.send(docs);
    })
    .catch((error) => {
      res.status(500);
      res.send({
        status: 500,
        message: error.message,
      });
    });
};

export const getNewsById = (req, res) => {
  const id = req.params.id;
  try {
    if (id) {
      // if id found
      News.findById(id)
        .then((doc) => {
          res.send(doc);
        })
        .catch((error) => {
          //if any error occurs while getting data
          res.status(500);
          res.send({
            message: error.message,
          });
        });
    } else {
      //if id not found
      throw new Error(`this id does not exist`);
    }
  } catch (error) {
    res.status(400);
    res.send({
      message: error,
    });
  }
};

export const getNewsByCategoryId = async (req, res) => {
  const categoryId = req.params.categoryId;
  const category = await Category.findById(categoryId);
  console.log(category);
  News.find({ _id: { $in: category.articles } })
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      //if any error occurs while getting data
      res.status(500);
      res.send({
        message: error.message,
      });
    });
};

export const addNews = (req, res) => {
  const data = req.body;

  // Assuming `data.category` is an array of Category IDs
  const categoryIds = data.category;

  // Create the News
  News.create({
    title: data.title,
    description: data.description,
    url: data.url,
    author: data.author,
    image: data.image,
    language: data.language,
    category: categoryIds,
    published: new Date(),
  })
    .then((newsDoc) => {
      // If the news document is created successfully, update each referenced Category document
      // by pushing the ID of the newly created News document into their 'articles' array
      Category.updateMany(
        { _id: { $in: categoryIds } },
        { $push: { articles: newsDoc._id } }
      )
        .then(() => {
          res.status(201).json(newsDoc);
        })
        .catch((error) => {
          res.status(500).json({ message: error.message });
        });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

export const updateNews = async (req, res) => {
  const id = req.params.id;
  const newNews = req.body;
  const newCategories = newNews.category;
  let oldCategories;
  //get the old news
  const oldNews = await News.findById(id);

  if (oldNews) {
    oldCategories = oldNews.category;
    oldNews.title = newNews.title;
    oldNews.description = newNews.description;
    oldNews.url = newNews.url;
    oldNews.author = newNews.author;
    oldNews.image = newNews.image;
    oldNews.language = newNews.language;
    oldNews.category = newCategories;
    oldNews.published = new Date();
    const updatedNews = await oldNews.save();
    if (updatedNews) {
      Category.updateMany(
        { _id: { $in: oldCategories } },
        { $pull: { articles: updatedNews._id } }
      )
        .then((doc) => {
          console.log("pull");
        })
        .catch((err) => {
          console.log("error in pull");
        });
      Category.updateMany(
        { _id: { $in: newCategories } },
        { $push: { articles: updatedNews._id } }
      )
        .then((doc) => {
          console.log("push");
        })
        .catch((err) => {
          console.log("error in push");
        });
    }
    res.send(updatedNews);
  } else {
    res.status(204).json({ message: `Data not found with ${id}` });
  }
};

export const deleteNews = (req, res) => {
  const id = req.params.id;
  News.findByIdAndDelete(id)
    .then(() => {
      res.send({ message: "Delete Sucessful." });
    })
    .catch((err) => [res.send({ error: err.message })]);
};
