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
    // Execute the resetRoomStates function when a PUT request is received
    await resetRoomStates();
    response.status(200).json({ status: "Room states have been reset." });
    return;
  }

  response.status(405).json({ status: "Request method not implemented." });
}
