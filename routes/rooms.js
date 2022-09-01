import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controller/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create
router.post("/:hotelid", verifyAdmin, createRoom);

// update
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// get room
router.get("/:id", getRoom);

// get all room
router.get("/", getRooms);

export default router;
