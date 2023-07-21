import { StyledRoomButton } from "./styles";

export default function RoomButton({ room }) {
  return <StyledRoomButton>{room.state}</StyledRoomButton>;
}
