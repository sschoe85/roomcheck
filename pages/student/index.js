import RoomList from "../../components/RoomList";
import Link from "next/link";
import { StyledTeacherIcon } from "../../components/TeacherIcon/styles";
import { StyledStudentIconStudentView } from "../../components/StudentIcon/styles";

export default function StudentView() {
  return (
    <>
      <Link href="/student">
        <StyledStudentIconStudentView />
      </Link>
      <Link href="/teacher">
        <StyledTeacherIcon />
      </Link>
      <RoomList userType="student" />
    </>
  );
}
