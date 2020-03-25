const assert = require("assert");
const expect = require("chai").expect;
const { generatePrimeNumbers, createTable } = require("../prime.js");

describe("Prime", () => {
  beforeEach(() => {
    jsdom();
  });
  describe("prime number", () => {
    it("generates 5 prime numbers if no value is passed", () => {
      expect(generatePrimeNumbers().length).eql(5);
    });
  });

  describe("document test", function() {
    jsdom();
    for (let i = 0; i < 10; i++) {
      it("create multiplication table of prime numbers", () => {
        let table = document.write("table");
        expect(table).eql("table");
      });
    }
  });
});