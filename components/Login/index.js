import { signIn, signOut, useSession } from "next-auth/react";
import { LoginContainer, LoginButton, LoginText, LogoutButton } from "./styles";

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
        <LoginText>Bitte logge dich als Admin ein</LoginText>
        <LoginButton onClick={() => signIn()}>Login mit GitHub</LoginButton>
      </LoginContainer>
    );
  }
}
