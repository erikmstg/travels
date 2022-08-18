import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updatedHotel,
} from "../controller/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create
// gunakan async untuk connect ke mongodb dan create new collection, karena membutuhkan waktu maka diperlukan async, dan lanjut try & catch
router.post("/", verifyAdmin, createHotel);

// Update
router.put("/:id", verifyAdmin, updatedHotel);

// Delete
router.delete("/:id", verifyAdmin, deleteHotel);

// GetById
router.get("/find/:id", getHotel);

// Get All / fetch all data
router.get(
  "/",
  getHotels
  // fake operation error handling
  /* const failed = true; */
  /*   const err = new Error();
  err.status = 404;
  err.message = "Sorry not found"; */
  /* if (failed) return next(createError(401, "Youre not authenticated")); */
);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
