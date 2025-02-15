import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastAction } from "@radix-ui/react-toast";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import axios from "@/lib/axiosInstance";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { referralFormSchema, ReferralFormType } from "@/types/referral.type";

export function FormDialog({ openForm, setOpenForm }: IFormDialogProps) {
  return (
    <Dialog open={openForm} onOpenChange={setOpenForm}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-2xl mb-2">
            Fill the form to create referral code
          </DialogTitle>
          <DialogDescription>
            <ReferralForm setOpenForm={setOpenForm} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function ReferralForm({ setOpenForm }: IReferralFormProps) {
  const { toast } = useToast();
  const form = useForm<ReferralFormType>({
    resolver: zodResolver(referralFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: ReferralFormType) {
    try {
      const response = await axios.post("/api/referrals", values);
      console.log(response);
      if (response.data.success) {
        setOpenForm(false);
        toast({
          variant: "success",
          title: response.data.message,
          description: `Your Referral code is: ${response.data.referralCode}`,
        });
      }
    } catch (error: any) {
      console.error("Error during create referral code: ", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response.data.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email id" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
