import Heading from "../Heading";

export default function RoomForm() {
  return (
    <div>
      <Heading>Erstelle einen neuen Raum</Heading>
      <form>
        <label htmlFor="roomName">Raumbezeichnung</label>
        <input type="text" id="roomName" name="roomName"></input>
        <label htmlFor="roomSubject">Fach</label>
        <input type="text" id="roomSubject" name="roomSubject"></input>
        <button type="submit">Raum erstellen</button>
      </form>
    </div>
  );
}
