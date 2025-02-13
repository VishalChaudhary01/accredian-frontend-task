import { useState } from "react";
import { ChevronDownIcon, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../sheet"
import { Button } from "../button";

export function Appbar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <div className="flex justify-between items-center py-4 w-full max-w-7xl mx-auto px-4 border-b border-secondary shadow-sm md:border-none md:shadow-none">
      <div className="flex items-center gap-4">
        <img src="./logo.png" alt="accredian" width={100} height={100} />
        <Button className="hidden md:flex">
          Courses <ChevronDownIcon className="w-4 h-4" />
        </Button>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <Button variant="ghost">Refer & Earn</Button>
        <Button variant="ghost">Resources</Button>
        <Button variant="ghost">About Us</Button>
        <Button variant="secondary">Login</Button>
        <Button>Try for free</Button>
      </div>
      <div className="md:hidden">
          <Button onClick={() => setIsOpenSidebar(true)}>
               Explore <ChevronRight className="w-4 h-4" />
          </Button>
      </div>
      <SidebarSheet isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
    </div>
  );
}

function SidebarSheet({ isOpenSidebar, setIsOpenSidebar }: { isOpenSidebar: boolean, setIsOpenSidebar: (isOpen: boolean) => void }) {
  return (
    <Sheet open={isOpenSidebar} onOpenChange={setIsOpenSidebar}>
      <SheetContent className="flex flex-col w-52"> 
        <SheetHeader>
          <SheetTitle className="flex justify-center">
               <img src="./logo.png" alt="accredian" width={100} height={100} />
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="flex flex-col gap-2 mt-4">
          <Button variant="ghost">Refer & Earn</Button>
          <Button variant="ghost">Resources</Button>
          <Button variant="ghost">About Us</Button>
          <Button variant="secondary">Login</Button>
          <Button>Try for free</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}