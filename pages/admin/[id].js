import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import RoomEditForm from "../../components/RoomEditForm";

export default function EditRoomPage() {
  const router = useRouter();
  const { id } = router.query;

  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    // Fetch room data using the roomId when the component mounts
    async function fetchRoomData() {
      try {
        const response = await fetch(`/api/rooms/edit/${id}`);
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

  console.log("roomData:", roomData);

  // Render the RoomEditForm component with the room ID
  return <RoomEditForm room={roomData} />;
}
