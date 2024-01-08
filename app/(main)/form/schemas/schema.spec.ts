import { describe, expect, it } from "vitest";
import { formSchema } from "./schema";

const validEmail = "test@gmail.com";
const validPassword = "password";

describe("schema", () => {
  describe("valid", () => {
    it("returns input", () => {
      const input = {
        email: validEmail,
        password: validPassword,
      };
      const actual = formSchema.parse(input);
      expect(actual).toEqual(input);
    });
  });
  describe("inValid", () => {
    describe("password is invalid", () => {
      it("throw error if the number of characters is less than 8", () => {
        const input = {
          email: validEmail,
          password: "pass",
        };
        expect(() => formSchema.parse(input)).toThrow(
          "8文字以上で入力してください"
        );
      });

      it("throw error if the number of characters is more than 16", () => {
        const input = {
          email: validEmail,
          password: "password-password",
        };
        expect(() => formSchema.parse(input)).toThrow(
          "16文字以内で入力してください"
        );
      });

      it("throw error if password is null", () => {
        const input = {
          email: validEmail,
          password: null,
        };
        expect(() => formSchema.parse(input)).toThrow(
          "パスワードを入力してください"
        );
      });

      it("throw error if password is undefined", () => {
        const input = {
          email: validEmail,
          password: undefined,
        };
        expect(() => formSchema.parse(input)).toThrow(
          "パスワードを入力してください"
        );
      });
    });
  });
});
