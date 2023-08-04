import { signIn, signOut, useSession } from "next-auth/react";
import {
  LoginContainer,
  LoginButton,
  LoginText,
  LogoutButton,
  RoleButton,
} from "./styles";
import Router from "next/router";

export default function Login() {
  const router = Router;
  const { data: session } = useSession();
  console.log("Session", session);

  const handleAdminClick = () => {
    router.push("/admin");
  };

  const handleTeacherClick = () => {
    router.push("/teacher");
  };

  if (session) {
    return (
      <LoginContainer>
        <LoginText>Eingeloggt als {session.user.name}</LoginText>
        <LogoutButton onClick={signOut}>Log Out</LogoutButton>
        {session.user.role === "teacher" ? (
          <RoleButton onClick={handleTeacherClick}>Zur Teacher View</RoleButton>
        ) : (
          <RoleButton onClick={handleAdminClick}>Zur Admin View</RoleButton>
        )}
      </LoginContainer>
    );
  } else {
    return (
      <LoginContainer>
        <LoginText>Logge dich als Lehrer oder Admin ein</LoginText>
        <LoginButton onClick={() => signIn()}>Login</LoginButton>
      </LoginContainer>
    );
  }
}
