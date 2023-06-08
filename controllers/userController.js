// import User from '../models/User.js';

// // Fetch all users
// export async function getUsers(req, res) {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

// // get a single user
// export async function getUser(req, res) {
//   try {
//     const user = await User.findById(req.params.id);
//     if (user == null) {
//       return res.status(404).json({ message: 'Cannot find user' });
//     }
//     res.json(user);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }

// // Create a new user
// export async function createUser(req, res) {
//   const user = new User({
//     username: req.body.username,
//     email: req.body.email,
//   });

//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// }

// // Update a user
// export async function updateUser(req, res) {
//   try {
//     const user = await User.findById(req.params.id);
//     if (user == null) {
//       return res.status(404).json({ message: 'Cannot find user' });
//     }

//     user.username = req.body.username;
//     user.email = req.body.email;

//     const updatedUser = await user.save();
//     res.json(updatedUser);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }

// // Delete a user
// export async function deleteUser(req, res) {
//   try {
//     const user = await User.findById(req.params.id);
//     if (user == null) {
//       return res.status(404).json({ message: 'Cannot find user' });
//     }

//     await user.remove();
//     res.json({ message: 'User has been deleted' });
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// }
