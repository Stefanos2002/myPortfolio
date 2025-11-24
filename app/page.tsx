import Navbar from "./components/Navbar/Navbar";
import HeroDetails from "./components/HeroDetails/HeroDetails";
export default function Home() {
  return (
    <div className="flex relative flex-row w-full h-screen">
      <Navbar />
      <HeroDetails />
    </div>
  );
}
