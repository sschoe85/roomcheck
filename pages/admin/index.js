import { useSession } from "next-auth/react";
import RoomList from "../../components/RoomList";
import Link from "next/link";
import { StyledTeacherIcon } from "../../components/TeacherIcon/styles";
import { StyledStudentIconAdminView } from "../../components/StudentIcon/styles";
import { StyledAdminIcon } from "../../components/AdminIcon/styles";
import BottomNavigation from "../../components/BottomNavigation";
import Heading from "../../components/Heading";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function AdminView() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session && session.user.role === "admin") {
    return (
      <>
        <Link href="/admin">
          <StyledAdminIcon />
        </Link>
        <Link href="/student">
          <StyledStudentIconAdminView />
        </Link>
        <Link href="/teacher">
          <StyledTeacherIcon />
        </Link>
        <RoomList userType="admin" />
        <BottomNavigation />
      </>
    );
  } else {
    return (
      <>
        <AdminViewContainer>
          <Heading>Zugriff verweigert</Heading>
          <Link href="/login">
            <AdminButton>Login</AdminButton>
          </Link>
          <Link href="/">
            <HomeButton>Startseite</HomeButton>
          </Link>
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
