import { RequiredEmail } from "@/app/schema/email";
import { z } from "zod";

export const formSchema = z.object({
  email: RequiredEmail,
  password: z
    .string({
      invalid_type_error: "パスワードを入力してください",
      required_error: "パスワードを入力してください",
    })
    .min(8, { message: "8文字以上で入力してください" })
    .max(16, { message: "16文字以内で入力してください" }),
});
export type formSchemaInput = z.input<typeof formSchema>;
export type formSchemaOutput = z.output<typeof formSchema>;
