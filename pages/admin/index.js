import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import RoomList from "../../components/RoomList";
import Link from "next/link";
import { StyledTeacherIcon } from "../../components/TeacherIcon/styles";
import { StyledStudentIconAdminView } from "../../components/StudentIcon/styles";
import { StyledAdminIcon } from "../../components/AdminIcon/styles";
import BottomNavigation from "../../components/BottomNavigation";

export default function AdminView() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if user is not logged in
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  // If the user is logged in and has admin privileges, display the admin view
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
