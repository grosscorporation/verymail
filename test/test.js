const assert = require("assert");
const should = require("should");
const verymail = require("../src");

describe("Testing Emails", function() {
  describe("Email is verymail", function() {
    it("should return true when email is verymail", function() {
      verymail("martyn@martyndavies.me").then(
        result => result.isValid.should.be.true && should.exist(result.mxArray)
      );
    });
  });

  describe("Email is not verymail", function() {
    it("should return false when email is not verymail", function() {
      verymail("nosir@neverwouldibuythisdomainladdyohno.com")
        .then(result => result.isValid.should.not.exist)
        .catch(err => should.exist(err.errors));
    });
  });
});
