// import express from "express";
// import {
//   getUsers,
//   getUser,
//   createUser,
//   updateUser,
//   deleteUser,
// } from "../controllers/userController.js";

// const userRouter = express.Router();

// userRouter.get("/get", function (req, res) {
//   const response = getUsers(req, res);
//   return response;
// });
// userRouter.get("/get/:id", function (req, res) {
//   const id = req.params.id;
//   const response = getUser(id, res);
//   return response;
// });
// userRouter.post("/add", function (req, res) {
//   const data = req.body;
//   const response = createUser(data, res);
//   return response;
// });
// userRouter.put("/update/:id", function (req, res) {
//   const id = req.params.id;
//   const body = req.body;
//   const response = updateUser(id, body);
//   if (!response.isError) {
//     response.status(response.status);
//     res.send(response.data);
//   } else {
//     response.status(response.status);
//     res.send(response.error);
//     res.status();
//   }
// });
// userRouter.delete("/delete/:id", function (req, res) {
//   const id = req.params.id;
//   const response = deleteUser(id, res);
//   return response;
// });

// export default userRouter;
