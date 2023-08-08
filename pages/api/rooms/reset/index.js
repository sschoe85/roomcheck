import dbConnect from "../../../../db/models/connect";
import Room from "../../../../db/models/Room";

async function resetRoomStates() {
  try {
    await dbConnect();
    await Room.updateMany({}, { status: "Keine Angabe" });
    window.location.reload();
  } catch (error) {
    console.error("Error resetting room states:", error);
  }
}

export default async function handler(request, response) {
  if (request.method === "PUT") {
    await resetRoomStates();
    response.status(200).json({ status: "Room states have been reset." });
    return;
  }

  response.status(405).json({ status: "Request method not implemented." });
}
