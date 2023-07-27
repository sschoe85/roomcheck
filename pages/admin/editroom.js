import { useRouter } from "next/router";
import RoomEditForm from "../../components/RoomEditForm";

export default function EditRoomPage() {
  const router = useRouter();
  const { id } = router.query;

  // Render the RoomEditForm component with the room ID
  return <RoomEditForm roomId={id} />;
}
