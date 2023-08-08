import { StyledButton } from "./styles";

export default function Button({ color, children }) {
  return <StyledButton color={color}>{children}</StyledButton>;
}
