import { useState } from "react";
import { StyledRoomButton } from "./styles";

export default function RoomButton({
  room,
  updateRoomState,
  initialRoomState,
}) {
  //state to keep track of the current room state
  const [currentState, setCurrentState] = useState(room.state);

  function toggleState() {
    let newState;
    switch (currentState) {
      case "Keine Angabe":
        newState = "Plätze frei";
        break;
      case "Plätze frei":
        newState = "Wenige Plätze frei";
        break;
      case "Wenige Plätze frei":
        newState = "Plätze belegt";
        break;
      case "Plätze belegt":
        newState = "Keine Angabe";
        break;
      default:
        newState = "Keine Angabe";
    }
    setCurrentState(newState);
  }

  return (
    <StyledRoomButton onClick={toggleState} state={currentState}>
      {currentState}
    </StyledRoomButton>
  );
}
