import { RoomButtonStyled } from "./styles";

export default function RoomButton({ room }) {
  return <RoomButtonStyled>{room.state}</RoomButtonStyled>;
}
