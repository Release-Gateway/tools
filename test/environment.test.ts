import { ENV } from "../src";

describe("Environment", () => {
    describe("#ENV", () => {
        it("should return the value of the environment variable", () => {
            process.env["TEST_ENV"] = "test";
            expect(ENV("TEST_ENV")).toEqual("test");
            delete process.env["TEST_ENV"];
        });

        it("should throw if the environment variable is not set", () => {
            expect(() => {
                ENV("TEST_ENV");
            }).toThrow("Environment variable TEST_ENV not set");
        });

        it("should return the default value if the environment variable is not set", () => {
            expect(ENV("TEST_ENV", "default")).toEqual("default");
        });

        it("should return the default value if the environment variable is not set", () => {
            expect(ENV("TEST_ENV", false)).toEqual(undefined);
        });
    });
});
