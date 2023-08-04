import Heading from "../components/Heading";
import RoomList from "../components/RoomList";
import HomePageNavigation from "../components/HomepageNavigation";

export default function Home() {
  return (
    <main>
      <Heading>🏫✅ RoomCheck ✅🏫</Heading>
      <RoomList />
      <HomePageNavigation />
    </main>
  );
}
