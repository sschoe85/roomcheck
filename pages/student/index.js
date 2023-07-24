import RoomList from "../../components/RoomList";
import SubHeading from "../../components/SubHeading";
import Link from "next/link";
import { StyledTeacherIcon } from "../../components/TeacherIcon/styles";
import { StyledStudentIcon } from "../../components/StudentIcon/styles";
import { StyledStudentIconStudentView } from "../../components/StudentIcon/styles";

export default function StudentView() {
  return (
    <>
      <SubHeading>Schüler-Sicht</SubHeading>
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
