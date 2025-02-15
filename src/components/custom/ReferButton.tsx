import { useState } from "react";
import { Button } from "../ui/button";
import { FormDialog } from "./FormDialog";

export function ReferButton({ children }: { children: React.ReactNode }) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <Button onClick={() => setOpenForm(true)}>{children}</Button>
      <FormDialog openForm={openForm} setOpenForm={setOpenForm} />
    </>
  );
}