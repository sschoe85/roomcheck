import dbConnect from "../../../../db/models/connect";
import Room from "../../../../db/models/Room";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "PUT") {
    try {
      const { roomName, roomSubject } = request.body;
      const updatedRoom = await Room.findByIdAndUpdate(id, {
        name: roomName,
        subject: roomSubject,
      });
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
