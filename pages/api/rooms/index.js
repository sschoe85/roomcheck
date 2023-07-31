import dbConnect from "../../../db/models/connect";
import Room from "../../../db/models/Room";

async function resetRoomStates() {
  try {
    await Room.updateMany({}, { status: "Keine Angabe" });
    console.log("Room states have been reset.");
  } catch (error) {
    console.error("Error resetting room states:", error);
  }
}

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

// Check and reset room states at 10:50 AM and 11:50 PM every day
setInterval(async () => {
  const now = new Date();
  if (
    (now.getHours() === 10 && now.getMinutes() === 50) ||
    (now.getHours() === 23 && now.getMinutes() === 50)
  ) {
    await resetRoomStates();
  }
}, 60000);
