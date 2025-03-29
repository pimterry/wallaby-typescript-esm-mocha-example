import { expect } from "chai";
import { RESULT } from "../src/index.js";

describe("A test suite", () => {

    it("runs a test", () => {
        expect(RESULT).to.equal("hello world");
    });

});