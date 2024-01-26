const request = require("supertest");
const app = require("../app.js");
require("dotenv").config();

describe("Testing GET /api/restaurants", () => {
  it("should return all restaurants", async () => {
    return request(app)
      .get("/api/restaurants")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBe(30);
      });
  });
  it("should return some restaurants in function of a given name", async () => {
    return request(app)
      .get("/api/restaurants?name=tasty")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body.length).toBeLessThan(30);
      });
  });
  it("should return some restaurants in function of a given city", async () => {
    return request(app)
      .get("/api/restaurants?city=ville")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body.length).toBeLessThan(30);
      });
  });
  it("should return some restaurants in function of a given meal", async () => {
    return request(app)
      .get("/api/restaurants?meal=breakfast")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body.length).toBeLessThan(30);
      });
  });
});
