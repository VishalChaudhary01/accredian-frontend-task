import { Appbar } from "./components/ui/custom/Appbar";
import { AddBanner } from "./components/ui/custom/AddBanner";
import { NavLinks } from "./components/ui/custom/NavLinks";
import { Hero } from "./components/ui/custom/Hero";
import { ReferProcess } from "./components/ui/custom/ReferProcess";
import { Benefits } from "./components/ui/custom/Benefits";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <AddBanner />
      <Appbar />
      <NavLinks />
      <Hero />
      <ReferProcess />
      <Benefits />
      <h1 className="text-2xl font-bold">Hello World</h1>
    </div>
  )
}

export default App
