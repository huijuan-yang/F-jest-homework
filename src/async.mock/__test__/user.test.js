import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const mockUsername = "mocked username";
    const mockPassword = "mocked password";
    const postResult = register(mockUsername, mockPassword);

    await expect(postResult).resolves.toEqual({
      username: mockUsername,
      password: mockPassword,
    });
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue();

    const mockUsername = "mocked username";
    const mockPassword = "mocked password";
    const postResult = register(mockUsername, mockPassword);

    await expect(postResult).rejects.toThrow("wrong username or password");
  });
});
