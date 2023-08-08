import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import {
  NavContainer,
  NavButtonContainer,
  HomeIcon,
  AddIcon,
  LoginIcon,
} from "./styles";

export default function Navigation({ userType }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleHomeClick = () => {
    if (session?.user?.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/teacher");
    }
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
        <NavButtonContainer onClick={() => router.push("/login")}>
          <LoginIcon />
        </NavButtonContainer>
      )}
    </NavContainer>
  );
}
