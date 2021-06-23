"use strict";

describe("buzzphrase", function () {
  describe("buzzphrase.get()", require("./methods/get"));

  describe("buzzphrase.getPhrase()", require("./methods/getPhrase"));

  describe("buzzphrase.getImperative()", require("./methods/getImperative"));

  describe("buzzphrase.log()", require("./methods/log"));

  describe("global cli tool", require("./methods/node"));
});
