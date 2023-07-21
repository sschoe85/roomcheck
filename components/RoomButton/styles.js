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
  color: #ffff;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);
  }

  /* Set colors based on the text content */
  background-color: ${(props) =>
    props.state === "Keine Angabe"
      ? "grey"
      : props.state === "Plätze frei"
      ? "green"
      : props.state === "Wenige Plätze frei"
      ? "orange"
      : "red"};
`;

export { StyledRoomButton };
