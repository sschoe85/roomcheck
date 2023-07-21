import { StyledRoomButton } from "./styles";

export default function RoomButton({ room }) {
  return <StyledRoomButton state={room.state}>{room.state}</StyledRoomButton>;
}
