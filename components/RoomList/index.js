import { useState, useEffect } from "react";
import RoomButton from "../RoomButton";
import {
  RoomListContainer,
  RoomListItem,
  BasicListItem,
  ButtonContainer,
} from "./styles";
import Divider from "../Divider";
import RoomIcon from "../RoomIcon";
import Link from "next/link";
import EditButton from "../EditButton";

export default function RoomList({ userType }) {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRoomData() {
      setIsLoading(true);
      try {
        const response = await fetch("/api/rooms");
        if (!response.ok) {
          throw new Error("Failed to fetch room data");
        }
        const data = await response.json();
        setRooms(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching room data:", error);
        setIsLoading(false);
      }
    }

    async function updateRoomState(roomId, newState) {
      // API Call for updating the room state
      try {
        const response = await fetch(`/api/rooms/updatestatus/${roomId}`, {
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

    fetchRoomData();
  }, []);

  return (
    <RoomListContainer>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {rooms.map((room, index) => (
            <BasicListItem key={room._id}>
              <RoomListItem key={room._id}>
                <RoomIcon />
                {room.name}
                {room.subject}
                <ButtonContainer>
                  <RoomButton
                    room={room}
                    updateRoomState={
                      userType === "teacher" ? updateRoomState : undefined
                    }
                    initialRoomState={room.status}
                  />
                  {userType === "admin" && (
                    <Link href={`/admin/${room._id}`}>
                      <EditButton>Edit</EditButton>
                    </Link>
                  )}
                </ButtonContainer>
              </RoomListItem>
              {index !== rooms.length - 1 && <Divider />}
            </BasicListItem>
          ))}
        </ul>
      )}
    </RoomListContainer>
  );
}
