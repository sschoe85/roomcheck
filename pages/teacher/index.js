import RoomList from "../../components/RoomList";

export default function TeacherView() {
  return (
    <>
      <h2>Lehrer-Sicht</h2>
      <RoomList userType="teacher" />
    </>
  );
}
