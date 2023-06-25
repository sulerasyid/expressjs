const { StatusCodes } = require("http-status-codes");
const { request } = require("../TestCase");

it("should return 200", async () => {
  const response = await request.get("/");

  expect(response.statusCode).toEqual(StatusCodes.OK);
  expect(response.text).toContain("Welcome to Express");
});
