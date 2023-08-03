import { signIn, signOut, useSession } from "next-auth/react";
import {
  LoginContainer,
  LoginButton,
  LoginText,
  LogoutButton,
  AdminButton,
} from "./styles";
import Router from "next/router";

export default function Login() {
  const router = Router;
  const { data: session } = useSession();

  if (session) {
    return (
      <LoginContainer>
        <LoginText>Eingeloggt als {session.user.name}</LoginText>
        <LogoutButton onClick={signOut}>Log Out</LogoutButton>
        <AdminButton onClick={() => router.push("/admin")}>
          Go to Admin View
        </AdminButton>
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
