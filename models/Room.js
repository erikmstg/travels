import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    // jika user ingin booking room pada waktu tertentu, maka user lain tidak dapat memesan room pada waktu yg sama
    roomNumbers: [
      {
        number: { type: Number },
        unavailableDates: { type: [Date] },
      },
    ],
  },
  { timestamps: true }
);

/* "example"
roomNumber: 
[
    {number: 100, unavailableDates: [01.04.2022, 05.04.2022]}
]
 */

export default mongoose.model("Room", RoomSchema);
