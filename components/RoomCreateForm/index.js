import Heading from "../Headings/Heading";
import { FormContainer, Label, Input, Form, SubmitButton } from "./styles";
import { useState } from "react";

export default function RoomCreateForm({ handleSubmit }) {
  const [formData, setFormData] = useState({
    roomName: "",
    roomSubject: "",
  });

  function handleSubmitForm(event) {
    event.preventDefault();
    handleSubmit(formData);
    setFormData({
      roomName: "",
      roomSubject: "",
    });
  }

  return (
    <FormContainer>
      <Heading>Erstelle einen neuen Raum</Heading>
      <Form onSubmit={handleSubmitForm}>
        <Label htmlFor="roomName">Raumbezeichnung</Label>
        <Input
          type="text"
          id="roomName"
          name="roomName"
          onChange={(event) =>
            setFormData({
              ...formData,
              roomName: event.target.value,
            })
          }
        />
        <Label htmlFor="roomSubject">Fach</Label>
        <Input
          type="text"
          id="roomSubject"
          name="roomSubject"
          onChange={(event) =>
            setFormData({
              ...formData,
              roomSubject: event.target.value,
            })
          }
        />
        <SubmitButton type="submit">Raum erstellen</SubmitButton>
      </Form>
    </FormContainer>
  );
}
