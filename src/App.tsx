import { Appbar } from "./components/ui/custom/Appbar";
import { AddBanner } from "./components/ui/custom/AddBanner";
import { NavLinks } from "./components/ui/custom/NavLinks";
import { Hero } from "./components/ui/custom/Hero";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <AddBanner />
      <Appbar />
      <NavLinks />
      <Hero />
      <h1 className="text-2xl font-bold">Hello World</h1>
    </div>
  )
}

export default App
