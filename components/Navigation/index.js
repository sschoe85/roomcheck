import { useRouter } from "next/router";
import {
  NavContainer,
  NavButtonContainer,
  HomeIcon,
  AddIcon,
  LoginIcon,
} from "./styles";

export default function Navigation({ userType }) {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <NavContainer>
      <NavButtonContainer onClick={handleHomeClick}>
        <HomeIcon />
      </NavButtonContainer>
      {userType === "admin" ? (
        <NavButtonContainer onClick={() => router.push("/form")}>
          <AddIcon />
        </NavButtonContainer>
      ) : (
        <NavButtonContainer onClick={handleLoginClick}>
          <LoginIcon />
        </NavButtonContainer>
      )}
    </NavContainer>
  );
}
