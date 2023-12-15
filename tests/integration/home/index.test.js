import { StatusCodes } from "http-status-codes";
import { request } from "../../TestCase.js";

it("should return 200", async () => {
  const response = await request.get("/");

  expect(response.statusCode).toEqual(StatusCodes.OK);
  expect(response.body).toMatchObject({
    message: "Express",
  });
});
