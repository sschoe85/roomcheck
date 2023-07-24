import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: String,
  status: String,
  subject: String,
});

const Room = mongoose.models.Room || mongoose.model("Room", roomSchema); // detects automatically that it is used for

export default Room;
