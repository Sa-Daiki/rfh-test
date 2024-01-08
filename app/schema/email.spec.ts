import { describe } from "node:test";
import { expect, it } from "vitest";
import { NullishEmail, RequiredEmail } from "./email";

const validEmail = "test@email.com";
const nullEmail = null;
const undefinedEmail = undefined;
const emptyEmail = "";
const invalidEmail = "emailemail";

describe("requiredEmailSchema", () => {
  describe("valid", () => {
    it("returns input", () => {
      const input = validEmail;
      const actual = RequiredEmail.parse(validEmail);
      expect(actual).toEqual(input);
    });
  });

  describe("invalid input", () => {
    it("throws error if email is null", () => {
      const input = nullEmail;
      expect(() => RequiredEmail.parse(input)).toThrow(
        "メールアドレスを入力してください"
      );
    });

    it("throws error if email is undefined", () => {
      const input = undefinedEmail;
      expect(() => RequiredEmail.parse(input)).toThrow(
        "メールアドレスを入力してください"
      );
    });

    it("throws error if email is empty", () => {
      const input = emptyEmail;
      expect(() => RequiredEmail.parse(input)).toThrow(
        "メールアドレスを入力してください"
      );
    });
  });
});

describe("nullishEmailSchema", () => {
  describe("valid", () => {
    it("returns input if email is valid", () => {
      const input = validEmail;
      const actual = NullishEmail.parse(validEmail);
      expect(actual).toEqual(input);
    });

    it("returns input if email is null", () => {
      const input = nullEmail;
      const actual = NullishEmail.parse(nullEmail);
      expect(actual).toEqual(input);
    });
    it("returns input if email is undefined", () => {
      const input = undefinedEmail;
      const actual = NullishEmail.parse(undefinedEmail);
      expect(actual).toEqual(input);
    });
  });

  describe("invalid", () => {
    it("throws error is email is empty", () => {
      const input = emptyEmail;
      expect(() => NullishEmail.parse(input)).toThrow(
        "メールアドレスの形式が不正です"
      );
    });

    it("throws error is email is invalid", () => {
      const input = invalidEmail;
      expect(() => NullishEmail.parse(input)).toThrow(
        "メールアドレスの形式が不正です"
      );
    });
  });
});
