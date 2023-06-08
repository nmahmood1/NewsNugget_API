import News from "../models/News.js";

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

export const getNewsByCategoryName = (req, res) => {
  const categoryName = req.params.categoryName;
  News.find({ category: { $in: [categoryName] } }).then((doc) => {
    res.send(doc);
  })
  .catch((error) => {
    //if any error occurs while getting data
    res.status(500);
    res.send({
      message: error.message,
    });
  })
};

export const addNews = (req, res) => {
  const data = req.body;
  News.create({
    title: data.title,
    description: data.description,
    url: data.url,
    author: data.author,
    image: data.image,
    language: data.language,
    category: data.category,
    published: new Date(),
  })
    .then((doc) => {
      res.send(doc);
    })
    .catch((error) => {
      res.status(500);
      res.send({
        message: error.message,
      });
    });
  return res;
};

export const updateNews = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  News.findOneAndUpdate({ _id: id }, body, { new: true })
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.status(500).send({ error: err.message })
    });
};

export const deleteNews = (req, res) => {
  const id = req.params.id;
  News.findByIdAndDelete(id)
    .then(() => {
      res.send({ message: "Delete Sucessful." });
    })
    .catch((err) => [res.send({ error: err.message })]);
};