import styled from "styled-components";
export default function RoomList() {
  // Dummy data for the rooms array

  const rooms = [
    { id: 1, name: "Room 101" },
    { id: 2, name: "Room 202" },
    { id: 3, name: "Room 303" },
    { id: 4, name: "Room 404" },
    { id: 5, name: "Room 505" },
  ];

  const RoomListContainer = styled.div`
    text-align: center;
  `;

  const RoomListTitle = styled.h3`
    color: pink;
  `;
  const RoomListItem = styled.li`
    list-style: none;
    font-size: 20px;
    margin-bottom: 40px;
  `;

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
