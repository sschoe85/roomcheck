import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import RoomEditForm from "../../components/RoomEditForm";

export default function EditRoomPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();

  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    // Fetch room data using the roomId when the component mounts
    async function fetchRoomData() {
      try {
        const response = await fetch(`/api/rooms/${id}`);
        const data = await response.json();
        if (response.ok) {
          setRoomData(data);
        } else {
          console.error("Failed to fetch room data");
        }
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    }

    if (id) {
      fetchRoomData();
    }
  }, [id]);

  useEffect(() => {
    // Redirect to login if user is not logged in
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  // Check if the logged-in user is an admin, and redirect to homepage if not
  useEffect(() => {
    if (session?.user.role !== "admin") {
      router.push("/");
    }
  }, [session, router]);

  return <RoomEditForm room={roomData} />;
}
