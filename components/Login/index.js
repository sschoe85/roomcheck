import { signIn, signOut, useSession } from "next-auth/react";
import {
  LoginContainer,
  LoginButton,
  LoginText,
  LogoutButton,
  RoleButton,
} from "./styles";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <LoginContainer>
        <LoginText>Eingeloggt als {session.user.name}</LoginText>
        <LogoutButton onClick={signOut}>Log Out</LogoutButton>
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
