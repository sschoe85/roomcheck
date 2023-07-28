import { useState } from "react";
import Heading from "../Heading";
import {
  FormContainer,
  Label,
  Input,
  Form,
  SubmitButton,
  DeleteButton,
} from "./styles";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { mutate } from "swr";

export default function RoomEditForm({ room }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    roomName: room?.name || "",
    roomSubject: room?.subject || "",
  });

  useEffect(() => {
    if (room) {
      setFormData({
        roomName: room.name || "",
        roomSubject: room.subject || "",
      });
    }
  }, [room]);

  async function handleSubmitForm(event) {
    event.preventDefault();

    const response = await fetch(`/api/rooms/updateroom/${room._id}`, {
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

  async function handleDelete() {
    try {
      const response = await fetch(`/api/rooms/${room._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Room deleted successfully!");
        mutate("/api/rooms");
        router.push("/admin");
      } else {
        console.error("Failed to delete room");
      }
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  }

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
        <DeleteButton onClick={handleDelete}>Raum löschen</DeleteButton>
      </Form>
    </FormContainer>
  );
}
