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
      email: "",
      password: "",
    },
  });

  const onSubmit = form.handleSubmit((_data) => {
    const data = _data as unknown as formSchemaOutput;
    window.alert(`メールアドレス: ${data.email}\nパスワード: ${data.password}`);
  });

  return (
    <div className="bg-white border rounded-[16px] p-14 max-w-[600px] w-full mx-auto">
      <h1 className="font-semibold text-xl mb-4">テストフォーム</h1>
      <ChadcnUiForm {...form}>
        <form onSubmit={onSubmit} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormControl>
                  <Input placeholder="メールアドレスを入力" {...field} />
                </FormControl>
                <FormMessage className="text-red-500 font-light" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>パスワード</FormLabel>
                <FormControl>
                  <Input placeholder="パスワードを入力" {...field} />
                </FormControl>
                <FormMessage className="text-red-500 font-light" />
              </FormItem>
            )}
          />
          <Button className="block ml-auto" type="submit" variant="outline">
            ログイン
          </Button>
        </form>
      </ChadcnUiForm>
    </div>
  );
};
