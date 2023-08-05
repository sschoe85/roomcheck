import RoomList from "../../components/RoomList";
import Heading from "../../components/Headings/Heading";

export default function StudentView() {
  return (
    <>
      <Heading>🏫✅ RoomCheck ✅🏫</Heading>
      <RoomList userType="student" />
    </>
  );
}
