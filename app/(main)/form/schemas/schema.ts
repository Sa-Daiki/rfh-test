import { z } from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(2)
    .max(50)
    .transform((v) => ({ value: v })),
});
export type formSchemaInput = z.input<typeof formSchema>;
export type formSchemaOutput = z.output<typeof formSchema>;
