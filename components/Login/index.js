import { signIn, signOut, useSession } from "next-auth/react";
import {
  LoginContainer,
  LoginButton,
  LoginText,
  LogoutButton,
  RoleButton,
} from "./styles";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();
  const [loggedInRedirected, setLoggedInRedirected] = useState(false);

  return (
    <LoginContainer>
      {session ? (
        <>
          <LoginText>Eingeloggt als {session.user.name}</LoginText>
          <LogoutButton onClick={signOut}>Log Out</LogoutButton>
        </>
      ) : (
        <>
          <LoginText>Logge dich als Lehrer oder Admin ein</LoginText>
          <LoginButton onClick={() => signIn()}>Login</LoginButton>
        </>
      )}
    </LoginContainer>
  );
}
