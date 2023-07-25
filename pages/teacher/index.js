import RoomList from "../../components/RoomList";
import { StyledStudentIcon } from "../../components/StudentIcon/styles";
import Link from "next/link";
import SubHeading from "../../components/SubHeading";
import { StyledTeacherIconTeacherView } from "../../components/TeacherIcon/styles";
export default function TeacherView() {
  return (
    <>
      <Link href="/teacher">
        <StyledTeacherIconTeacherView />
      </Link>
      <Link href="/student">
        <StyledStudentIcon />
      </Link>

      <RoomList userType="teacher" />
    </>
  );
}
