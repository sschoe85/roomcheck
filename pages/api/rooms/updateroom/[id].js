// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../../db/models/connect";
import Room from "../../../../db/models/Room";

export default async function handler(request, response) {
  await dbConnect(); // Establishing connection with MongoDB database

  const { id } = request.query;

  if (request.method === "PUT") {
    try {
      const { roomName, roomSubject } = request.body;
      const updatedRoom = await Room.findByIdAndUpdate(
        id,
        { name: roomName, subject: roomSubject },
        { new: true } // Return the updated room after the update
      );
      if (!updatedRoom) {
        return response.status(404).json({ error: "Room not found" });
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
