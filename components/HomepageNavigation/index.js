import { NavButton, NavContainer, HomeIcon, LoginIcon } from "./styles";
import Link from "next/link";

export default function HomePageNavigation() {
  return (
    <NavContainer>
      <Link href="/">
        <NavButton>
          <HomeIcon />
        </NavButton>
      </Link>
      <Link href="/login">
        <NavButton>
          <LoginIcon />
        </NavButton>
      </Link>
    </NavContainer>
  );
}
