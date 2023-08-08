import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: #ff0054;
  font-size: 1.5rem;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px;
  height: auto;
`;

const ColoredSpanBlue = styled.span`
  color: #0064ad;
`;

const ColoredSpanOrange = styled.span`
  color: #f29400;
`;

export default function Heading() {
  return (
    <>
      <Logo src="../../../LMG.png" alt="Logo" />
      <Title>
        <ColoredSpanBlue>Room</ColoredSpanBlue>{" "}
        <ColoredSpanOrange>Check</ColoredSpanOrange>
      </Title>
    </>
  );
}
