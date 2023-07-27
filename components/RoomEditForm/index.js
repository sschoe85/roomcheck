import Heading from "../Heading";
import { FormContainer, Label, Input, Form, SubmitButton } from "./styles";

export default function RoomEditForm({ room }) {
  return (
    <FormContainer>
      <Heading>Bearbeite den Raum</Heading>
      <Form>
        <Label htmlFor="roomName">Raumbezeichnung</Label>
        <Input
          type="text"
          id="roomName"
          name="roomName"
          defaultValue={room ? room.name : ""}
        />
        <Label htmlFor="roomSubject">Fach</Label>
        <Input
          type="text"
          id="roomSubject"
          name="roomSubject"
          defaultValue={room ? room.subject : ""}
        />
        <SubmitButton type="submit">Änderungen speichern</SubmitButton>
      </Form>
    </FormContainer>
  );
}
