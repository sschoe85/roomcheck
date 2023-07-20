import RoomButton from "../RoomButton";
import { RoomListContainer, RoomListTitle, RoomListItem } from "./styles";
import Divider from "../Divider";
export default function RoomList() {
  // Dummy data for the rooms array
  const rooms = [
    { id: 1, name: "Room 101", state: "Keine Angabe" },
    { id: 2, name: "Room 202", state: "Keine Angabe" },
    { id: 3, name: "Room 303", state: "Keine Angabe" },
    { id: 4, name: "Room 404", state: "Keine Angabe" },
    { id: 5, name: "Room 505", state: "Keine Angabe" },
  ];

  return (
    <RoomListContainer>
      <RoomListTitle>Room List</RoomListTitle>
      <ul>
        {rooms.map((room, index) => (
          <div key={room.id}>
            <RoomListItem key={room.id}>
              {room.name}
              <RoomButton room={room} />
            </RoomListItem>
            {index !== rooms.length - 1 && <Divider />}
          </div>
        ))}
      </ul>
    </RoomListContainer>
  );
}
