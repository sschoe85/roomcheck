import RoomList from "../../components/RoomList";
import Navigation from "../../components/Navigation";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
export default function TeacherView() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log("Session data in TeacherView:", session);

  useEffect(() => {
    if (!session) {
      return; // Session data is still loading
    }

    if (session.user.role !== "teacher") {
      router.push("/login");
    }
  }, [router, session]);

  if (session && session.user.role === "teacher") {
    return (
      <>
        <RoomList userType="teacher" />
        <Navigation />
      </>
    );
  }
}
