import dbConnect from "../../../db/models/connect";
import Room from "../../../db/models/Room";

export default async function handler(request, response) {
  console.log("API Request received:", request.method);

  await dbConnect();

  if (request.method === "GET") {
    const rooms = await Room.find();
    response.status(200).json(rooms);
    return;
  }

  if (request.method === "POST") {
    const { roomName, roomSubject } = request.body;

    const newRoom = await Room.create({
      name: roomName,
      status: "Keine Angabe",
      subject: roomSubject,
    });

    response.status(200).json({ status: "Room created." });
    return;
  }

  response.status(405).json({ status: "Request method not implemented." });
}
