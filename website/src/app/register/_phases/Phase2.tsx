"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Phase2Props {
  phase1Data: {
    name: string;
    email: string;
    mobile: string;
    gender: string;
    purpose: string;
  };
  onFinalSubmit: (values: any) => void;
}

const formSchema = z.object({
  purpose: z.string().min(1, { message: "Please select purpose" }),
  gender: z.string().min(1, { message: "Please select gender" }),
});

const Phase2 = ({ phase1Data, onFinalSubmit }: Phase2Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const finalData = {
      ...phase1Data,
      ...values,
    };
    onFinalSubmit(finalData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col w-96 items-center"
      >
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <div className="flex items-center space-x-2 border border-white px-4 py-2 rounded-md">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-white px-4 py-2 rounded-md">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2 border border-white px-4 py-2 rounded-md">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="purpose"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Purpose</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-transparent">
                    <SelectValue placeholder="Select One" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="dating">Dating</SelectItem>
                  <SelectItem value="life_partner">Life Partner</SelectItem>
                  <SelectItem value="marriage">Marriage</SelectItem>
                  <SelectItem value="bff">BFF</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-white text-emerald-900 font-semibold rounded-full hover:bg-slate-100 w-1/2"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default Phase2;
