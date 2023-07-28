// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../db/models/connect";
import Room from "../../../db/models/Room";

export default async function handler(request, response) {
  await dbConnect(); //establishing connection with MongoDB database

  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const room = await Room.findById(id);
      if (!room) {
        return response.status(404).json({ message: "Room not found" });
      }
      response.status(200).json(room);
      return;
    } catch (error) {
      response.status(500).json({ message: "Server Error" });
      return;
    }
  }

  if (request.method === "DELETE") {
    try {
      await dbConnect();

      const deletedRoom = await Room.findByIdAndDelete(id);
      if (!deletedRoom) {
        return response.status(404).json({ message: "Room not found" });
      }

      response.status(200).json({ message: "Room deleted successfully" });
    } catch (error) {
      response.status(500).json({ message: "Server Error" });
    }
  } else {
    response.status(405).json({ message: "Method not allowed" });
  }

  response.status(405).json({ status: "Request method not implemented." });
}
