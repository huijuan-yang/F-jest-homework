export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() =>
    Promise.resolve({
      data: {
        username: "mocked username",
        password: "mocked password",
      },
    })
  ),
};
