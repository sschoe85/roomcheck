import { useState } from "react";
import { StyledRoomButton } from "./styles";
import { useEffect } from "react";

export default function RoomButton({
  room,
  updateRoomState,
  initialRoomState,
}) {
  //state to keep track of the current room state
  const [currentState, setCurrentState] = useState(initialRoomState);

  useEffect(() => {
    setCurrentState(initialRoomState);
  }, [initialRoomState]);

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
    updateRoomState(room._id, newState);
  }

  return (
    <StyledRoomButton
      onClick={toggleState}
      state={currentState}
      disabled={!updateRoomState}
    >
      {currentState}
    </StyledRoomButton>
  );
}
