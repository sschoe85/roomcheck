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

  useEffect(() => {
    async function fetchRoomData() {
      try {
        const response = await fetch("/api/rooms");
        console.log("response:" + response);
        if (!response.ok) {
          throw new Error("Failed to fetch room data");
        }
        const data = await response.json();
        console.log("data:" + data);
        setRooms(data);
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    }

    fetchRoomData();
  }, []);

  function updateRoomState(roomId, newState) {
    //API Call for updating the room state
  }

  return (
    <RoomListContainer>
      <ul>
        {rooms.map((room, index) => (
          <BasicListItem key={room.id}>
            <RoomListItem key={room.id}>
              <RoomIcon />
              {room.name}
              <RoomButton
                room={room}
                updateRoomState={(newState) =>
                  updateRoomState(room.id, newState)
                }
                initialRoomState={room.status}
              />
            </RoomListItem>
            {index !== rooms.length - 1 && <Divider key={room.id} />}
          </BasicListItem>
        ))}
      </ul>
    </RoomListContainer>
  );
}
