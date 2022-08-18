import mongoose from "mongoose";

// create new Schema
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // its going to be type of our properties (hotels, apart, etc)
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String], // include rooms id ( child of Hotel )
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

// export model dengan nama "Hotel"
export default mongoose.model("Hotel", HotelSchema);
