import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import RoomList from "../../components/RoomList";
import Link from "next/link";
import { StyledTeacherIcon } from "../../components/TeacherIcon/styles";
import { StyledStudentIconAdminView } from "../../components/StudentIcon/styles";
import { StyledAdminIcon } from "../../components/AdminIcon/styles";
import BottomNavigation from "../../components/BottomNavigation";

export default function AdminView() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session || session.user.role !== "admin") {
    router.push("/login");
  }

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
}
