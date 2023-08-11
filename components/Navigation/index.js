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
    } else if (session?.user?.role === "teacher") {
      router.push("/teacher");
    } else {
      router.push("/");
    }
  };

  return (
    <NavContainer>
      <NavButtonContainer onClick={handleHomeClick}>
        <HomeIcon />
      </NavButtonContainer>
      {session?.user?.role === "admin" ? (
        <>
          <NavButtonContainer onClick={() => router.push("/form")}>
            <AddIcon />
          </NavButtonContainer>
          <NavButtonContainer onClick={() => router.push("/login")}>
            <LoginIcon />
          </NavButtonContainer>
        </>
      ) : (
        <NavButtonContainer onClick={() => router.push("/login")}>
          <LoginIcon />
        </NavButtonContainer>
      )}
    </NavContainer>
  );
}
