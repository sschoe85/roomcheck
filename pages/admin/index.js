import { useSession } from "next-auth/react";
import RoomList from "../../components/RoomList";
import Heading from "../../components/Headings/Heading";
import { useRouter } from "next/router";
import styled from "styled-components";
import Navigation from "../../components/Navigation";

export default function AdminView() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session && session.user.role === "admin") {
    return (
      <>
        <RoomList userType="admin" />
        <Navigation userType="admin" />
      </>
    );
  } else {
    return (
      <>
        <AdminViewContainer>
          <Heading>Zugriff verweigert</Heading>
          <AdminButton onClick={() => router.push("/login")}>Login</AdminButton>
          <HomeButton onClick={() => router.push("/")}>Startseite</HomeButton>
          <Navigation />
        </AdminViewContainer>
      </>
    );
  }
}

const AdminViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const AdminButton = styled.button`
  background-color: #ff0054;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  width: 170px;
  font-size: 16px;
  margin-top: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ac1f2d;
  }
`;

const HomeButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  width: 170px;
  font-size: 16px;
  margin-top: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
