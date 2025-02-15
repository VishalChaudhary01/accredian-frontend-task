import { Appbar } from "./components/custom/Appbar";
import { AddBanner } from "./components/custom/AddBanner";
import { NavLinks } from "./components/custom/NavLinks";
import { Hero } from "./components/custom/Hero";
import { ReferProcess } from "./components/custom/ReferProcess";
import { Benefits } from "./components/custom/Benefits";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <AddBanner />
      <Appbar />
      <NavLinks />
      <Hero />
      <ReferProcess />
      <Benefits />
    </div>
  )
}

export default App
