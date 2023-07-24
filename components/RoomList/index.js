import { useState } from "react";
import RoomButton from "../RoomButton";
import { RoomListContainer, RoomListItem, BasicListItem } from "./styles";
import Divider from "../Divider";
import RoomIcon from "../RoomIcon";
import { useEffect } from "react";

export default function RoomList() {
  /*
  // Dummy data for the rooms array
  const [rooms, setRooms] = useState([
    { id: 1, name: "Room 101", state: "Keine Angabe" },
    { id: 2, name: "Room 202", state: "Keine Angabe" },
    { id: 3, name: "Room 303", state: "Keine Angabe" },
    { id: 4, name: "Room 404", state: "Keine Angabe" },
    { id: 5, name: "Room 505", state: "Keine Angabe" },
  ]);

  //Update des Zustand des Raums im Array
  function updateRoomState(roomId, newState) {
    const updatedRooms = rooms.map((room) =>
      room.id === roomId ? { ...room, state: newState } : room
    );
    setRooms(updatedRooms);
  }
  */

  const [rooms, setRooms] = useState([]);

  //fetch room data

  async function fetchRoomData() {
    try {
      const response = await fetch("/api/rooms");
      if (!response.ok) {
        throw new Error("Failed to fetch room data");
      }
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      console.error("Error fetching room data:", error);
    }
  }

  useEffect(() => {
    fetchRoomData();
  }, []);
  async function updateRoomState(roomId, newState) {
    //API Call for updating the room state
    try {
      const response = await fetch(`/api/rooms/${roomId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newState }),
      });

      if (!response.ok) {
        throw new Error("Failed to update room status");
      }

      // Fetch the updated room data after updating the status
      await fetchRoomData();
    } catch (error) {
      console.error("Error updating room status:", error);
    }
  }

  return (
    <RoomListContainer>
      <ul>
        {rooms.map((room, index) => (
          <BasicListItem key={room._id}>
            <RoomListItem key={room._id}>
              <RoomIcon />
              {room.name}
              <RoomButton
                room={room}
                updateRoomState={updateRoomState}
                initialRoomState={room.status}
              />
            </RoomListItem>
            {index !== rooms.length - 1 && <Divider />}
          </BasicListItem>
        ))}
      </ul>
    </RoomListContainer>
  );
}

//comment for triggering redeployment
