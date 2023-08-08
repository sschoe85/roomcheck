import dbConnect from "../../../db/models/connect";
import Room from "../../../db/models/Room";

export default async function handler(request, response) {
  await dbConnect();
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
      const deletedRoom = await Room.findByIdAndDelete(id);
      if (!deletedRoom) {
        return response.status(404).json({ message: "Room not found" });
      }

      console.log("Deleted room:", deletedRoom);
      response.status(200).json({ message: "Room deleted successfully" });
    } catch (error) {
      console.error("Error deleting room:", error);
      response.status(500).json({ message: "Server Error" });
    }
  } else {
    response.status(405).json({ message: "Method not allowed" });
  }
}
