import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updatedUser,
} from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/* 
// check authentication
router.get("/checkAuth", verifyToken, (req, res, next) => {
  res.send("hai youre logged in");
});

// update user authentication
router.get("/checkUser/:id", verifyUser, (req, res, next) => {
  res.send("hai user, youre active account who can delete or update");
});

// check user isAdmin
router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hai Admin");
});
 */

router.post("/", createUser);
router.put("/:id", verifyUser, updatedUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers); // only admin can collect all users account

export default router;
