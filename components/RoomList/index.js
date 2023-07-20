import { RoomListContainer, RoomListTitle, RoomListItem } from "./styles";
export default function RoomList() {
  // Dummy data for the rooms array

  const rooms = [
    { id: 1, name: "Room 101" },
    { id: 2, name: "Room 202" },
    { id: 3, name: "Room 303" },
    { id: 4, name: "Room 404" },
    { id: 5, name: "Room 505" },
  ];

  return (
    <RoomListContainer>
      <RoomListTitle>Room List</RoomListTitle>
      <ul>
        {rooms.map((room) => (
          <RoomListItem key={room.id}>{room.name}</RoomListItem>
        ))}
      </ul>
    </RoomListContainer>
  );
}
