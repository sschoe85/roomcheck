// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../db/models/connect";
import Room from "../../db/models/Room";

export default async function handler(request, response) {
  await dbConnect(); //establishing connection with MongoDB database

  if (request.method === "GET") {
    const rooms = await Room.find(); //find all rooms in the database
    response.status(200).json(rooms);
    return;
  }

  if (request.method === "PUT") {
    const { id } = request.query;
    const { status } = request.body;

    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      if (!updatedRoom) {
        return response.status(404).json({ message: "Room not found" });
      }
      response.status(200).json(updatedRoom);
      return;
    } catch (error) {
      response.status(500).json({ message: "Server Error" });
      return;
    }
  }

  response.status(405).json({ status: "Request method not implemented." });
}
