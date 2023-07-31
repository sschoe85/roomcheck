import dbConnect from "../../../../db/models/connect";
import Room from "../../../../db/models/Room";

async function resetRoomStates() {
  try {
    await dbConnect();
    await Room.updateMany({}, { status: "Keine Angabe" });
    console.log("Room states have been reset.");
  } catch (error) {
    console.error("Error resetting room states:", error);
  }
}

export default async function handler(request, response) {
  console.log("API Request received:", request.method);

  if (request.method === "PUT") {
    const now = new Date();
    if (
      (now.getHours() === 10 && now.getMinutes() === 50) ||
      (now.getHours() === 23 && now.getMinutes() === 50)
    ) {
      await resetRoomStates();
      response.status(200).json({ status: "Room states have been reset." });
    } else {
      response.status(200).json({ status: "No action needed." });
    }
    return;
  }

  response.status(405).json({ status: "Request method not implemented." });
}
