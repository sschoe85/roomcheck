import { NavButton, NavContainer, HomeIcon, AddIcon } from "./styles";
import Link from "next/link";

export default function BottomNavigation() {
  return (
    <NavContainer>
      <Link href="/">
        <NavButton>
          <HomeIcon />
        </NavButton>
      </Link>
      <Link href="/form">
        <NavButton>
          <AddIcon />
        </NavButton>
      </Link>
    </NavContainer>
  );
}
