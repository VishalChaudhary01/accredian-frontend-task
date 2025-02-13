import { Appbar } from "./components/ui/custom/Appbar";

function App() {
  return (
    <div className="flex flex-col gap-4 w-full min-h-screen max-w-7xl mx-auto px-4 md:px-0">
      <Appbar />
      <h1 className="text-2xl font-bold">Hello World</h1>
    </div>
  )
}

export default App
