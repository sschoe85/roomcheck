import styled from "styled-components";

const StyledRoomButton = styled.button`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 20px;
  height: 45px;
  width: 200px;
  line-height: 45px;
  border-radius: 7px;
  font-weight: 400;
  font-size: 16px;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;

  /* Set colors based on the text content */
  background-color: ${(props) =>
    props.state === "Keine Angabe"
      ? "#a0a0a0"
      : props.state === "Plätze frei"
      ? "#0AA33F"
      : props.state === "Wenige Plätze frei"
      ? "#ff9f1c"
      : "#d90429"};
  color: white;

  &:hover {
    background-color: ${(props) =>
      props.state === "Keine Angabe"
        ? "#919191"
        : props.state === "Plätze frei"
        ? "#00822f"
        : props.state === "Wenige Plätze frei"
        ? "#e68a00"
        : props.state === "Plätze belegt"
        ? "#b60023"
        : "transparent"};
  }
`;

export { StyledRoomButton };
