import { NavButton, NavContainer, HomeIcon, LoginIcon } from "./styles";
import { useRouter } from "next/router";

export default function HomePageNavigation() {
  const router = useRouter();
  const handleHomeClick = () => {
    router.push("/");
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <NavContainer>
      <NavButton onClick={handleHomeClick}>
        <HomeIcon />
      </NavButton>
      <NavButton onClick={handleLoginClick}>
        <LoginIcon />
      </NavButton>
    </NavContainer>
  );
}
