/**
 *
 * Author:  AppSeed.us
 *
 * License: MIT - Copyright (c) AppSeed.us
 * @link https://github.com/app-generator/nodejs-starter
 *
 */

const { expect } = require("code");
const request = require("supertest");
const lab = require("lab").script();
exports.lab = lab;
const app = require("../../index.js");

const faker = require("faker");
const { test, suite } = lab;

suite("[test][User]", () => {
  let response;
  test("User should be able to login", async (done) => {
    const email = faker.internet.email();
    const password = faker.internet.password();
    const name = faker.name;
    response = await request(app)
      .post("/api/users/login")
      .send({ user: { email, password } })
      .set("Accept", "application/json");
    //this user was not created before so it will return an error
    expect(response.status).to.equal(400);
  });

});
