import { useState } from "react";
import Heading from "../Heading";
import { FormContainer, Label, Input, Form, SubmitButton } from "./styles";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function RoomEditForm({ room }) {
  const router = useRouter();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData({
      roomName: room?.name || "",
      roomSubject: room?.subject || "",
    });
  }, [room]);

  console.log("Room object:", room);
  console.log("FormData:", formData);

  async function handleSubmitForm(event) {
    event.preventDefault();

    console.log("Request Payload:", {
      roomName: formData.roomName,
      roomSubject: formData.roomSubject,
    });

    const response = await fetch(`/api/rooms/${room._id}`, {
      method: "PUT",
      body: JSON.stringify({
        roomName: formData.roomName,
        roomSubject: formData.roomSubject,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("Data successfully updated!");
      router.push("/admin");
    } else {
      console.error("There seems to be a problem updating the data");
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <FormContainer>
      <Heading>Bearbeite den Raum</Heading>
      <Form onSubmit={handleSubmitForm}>
        <Label htmlFor="roomName">Raumbezeichnung</Label>
        <Input
          type="text"
          id="roomName"
          name="roomName"
          value={formData.roomName}
          onChange={handleInputChange}
        />
        <Label htmlFor="roomSubject">Fach</Label>
        <Input
          type="text"
          id="roomSubject"
          name="roomSubject"
          value={formData.roomSubject}
          onChange={handleInputChange}
        />
        <SubmitButton type="submit">Änderungen speichern</SubmitButton>
      </Form>
    </FormContainer>
  );
}
