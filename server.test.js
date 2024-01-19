const request = require("supertest");
const app = require("./server");

describe("Authentication Tests", () => {
  it("Sign User Up via /signup", async () => {
    const resp = await request(app).post("/signup").send({
      username: "user1",
      password: "password123",
    });

    expect(resp.status).toEqual(201);
  });

  it("Logs User In via /login", async () => {
    const resp = await request(app).post("/login").send({
      username: "user1",
      password: "password123",
    });
    expect(resp.status).toEqual(200);
    expect(resp.body).toHaveProperty("token");
  });

  it("Should throw an error from /signup cause the user already exists", async () => {
    const signup1 = await request(app).post("/signup").send({
      username: "user2",
      password: "password123",
    });

    expect(signup1.status).toEqual(201);

    const signup2 = await request(app).post("/signup").send({
      username: "user2",
      password: "password123",
    });

    expect(signup2.status).toEqual(400);
  });

  it("Should get Unauthorized due to client trying to access a protexted route without being logged in", async () => {
    const resp = await request(app).get("/protected");

    expect(resp.status).toEqual(401);
  });

  it("Should access the protected route via a logged in user", async () => {
    const respFromLogin = await request(app).post("/login").send({
      username: "user1",
      password: "password123",
    });
    expect(respFromLogin.status).toEqual(200);
    expect(respFromLogin.body).toHaveProperty("token");

    const resp = await request(app)
      .get("/protected")
      .set("token", respFromLogin.body.token);

    expect(resp.status).toEqual(200);
    expect(resp.body).toHaveProperty("success");
    expect(resp.body.success).toBe(true);
  });
});
