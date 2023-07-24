// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../db/models/connect";
import Room from "../../db/models/Room";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const rooms = await Room.find();
    response.status(200).json(rooms);
    return;
  }

  response.status(405).json({ status: "Request method not implemented." });
}
