import RoomList from "../../components/RoomList";
import Link from "next/link";
import { StyledTeacherIcon } from "../../components/TeacherIcon/styles";
import { StyledStudentIconAdminView } from "../../components/StudentIcon/styles";
import { StyledAdminIcon } from "../../components/AdminIcon/styles";
import BottomNavigation from "../../components/BottomNavigation";

export default function AdminView() {
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
      <RoomList />
      <BottomNavigation />
    </>
  );
}
