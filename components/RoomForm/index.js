import Heading from "../Heading";
import { FormContainer, Label, Input, Form, SubmitButton } from "./styles";

export default function RoomForm() {
  return (
    <FormContainer>
      <Heading>Erstelle einen neuen Raum</Heading>
      <Form>
        <Label htmlFor="roomName">Raumbezeichnung</Label>
        <Input type="text" id="roomName" name="roomName"></Input>
        <Label htmlFor="roomSubject">Fach</Label>
        <Input type="text" id="roomSubject" name="roomSubject"></Input>
        <SubmitButton type="submit">Raum erstellen</SubmitButton>
      </Form>
    </FormContainer>
  );
}
