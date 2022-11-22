const request = require("supertest");
const app = require("./routes/user");
const mongoose = require("mongoose");

describe("Test the root path", () => {
    // get 200 TASK 1
    test("It should response the GET method", () => {
    request(app).post("/User/add").send({
      Name: "Aashir aftab",
      Email: "i200523@nu.edu.pk",
      Age: 22,
      Contact: 3138662739,
    }).expect(200)
  });

  
    test("It should response the GET method", () => {
      const response = request(app)
        .post("http://localhost:3005/User/delete")
        .send({
            Name: "Aashir aftab",
            Email: "i200523@nu.edu.pk",
            Age: 22,
            Contact: 3138662739,
        });
      expect(200);
    });
  

    // get 400 TASK 3
    test("It should response the GET method", () => {
    request(app).post("/User/add").send({
      Name: "Aashir aftab",
    }).expect(400)
  });


});