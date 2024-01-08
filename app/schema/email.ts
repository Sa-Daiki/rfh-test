import { z } from "zod";

export const RequiredEmail = z
  .string({
    invalid_type_error: "メールアドレスを入力してください",
    required_error: "メールアドレスを入力してください",
  })
  .min(1, { message: "メールアドレスを入力してください" })
  .email("メールアドレスの形式が不正です");

export const NullishEmail = z
  .string()
  .email("メールアドレスの形式が不正です")
  .nullish();
