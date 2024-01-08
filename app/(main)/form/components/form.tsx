"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form as ChadcnUiForm,
} from "@/app/components/ui/form";
import {
  formSchemaInput,
  formSchema,
  formSchemaOutput,
} from "../schemas/schema";

export const Form: React.FC = () => {
  const form = useForm<formSchemaInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = form.handleSubmit((_data) => {
    const data = _data as unknown as formSchemaOutput;
    console.log(data);
  });

  return (
    <div>
      <h1>title</h1>
      <ChadcnUiForm {...form}>
        <form onSubmit={onSubmit} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="outline">
            Submit
          </Button>
        </form>
      </ChadcnUiForm>
    </div>
  );
};
