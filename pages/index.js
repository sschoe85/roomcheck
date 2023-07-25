import Link from "next/link";
import Heading from "../components/Heading";
import RoomList from "../components/RoomList";
import { StyledTeacherIconHomepage } from "../components/TeacherIcon/styles";
import { StyledStudentIcon } from "../components/StudentIcon/styles";

export default function Home() {
  return (
    <main>
      <Heading>🏫✅ RoomCheck ✅🏫</Heading>
      <Link href="/teacher">
        <StyledTeacherIconHomepage />
      </Link>
      <Link href="/student">
        <StyledStudentIcon />
      </Link>
      <RoomList />
    </main>
  );
}
