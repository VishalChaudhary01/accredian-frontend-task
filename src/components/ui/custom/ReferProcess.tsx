import { Button } from "../button";

export function ReferProcess() {
  return (
    <div className="flex flex-col md:gap-4 items-center justify-center w-full max-w-7xl mx-auto bg-secondary p-6">
      <h2 className="text-2xl font-bold">How Do I <span className="text-primary">Refer</span></h2>
      <div className="max-w-5xl w-full">
        <img src="./process.svg" alt="refer process" className="hidden md:block w-full object-contain"/>
        <img src="./processMobile.svg" alt="refer process" className="block md:hidden w-full object-contain"/>
      </div>
      <Button>Refer Now</Button>
    </div>
  );
}
