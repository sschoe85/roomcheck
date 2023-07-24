import RoomList from "../../components/RoomList";

export default function StudentView() {
  return (
    <>
      <h2>Schüler-Sicht</h2>
      <RoomList userType="student" />
    </>
  );
}
