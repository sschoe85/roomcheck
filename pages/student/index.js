import RoomList from "../../components/RoomList";
import Navigation from "../../components/Navigation";

export default function StudentView() {
  return (
    <>
      <RoomList userType="student" />
      <Navigation />
    </>
  );
}
