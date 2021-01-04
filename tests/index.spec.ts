import { getMediaFeatures } from "../src/main";
import { discreteValues, mediaFeatures } from "../src/utils";
import main from "../src";
it("runs one test", () => {
  expect(typeof getMediaFeatures).toBe("function");
});
describe("GetMediaFeatures", () => {
  describe("with no args", () => {
    expect(getMediaFeatures()).toStrictEqual(mediaFeatures);
    expect(main()).toStrictEqual(mediaFeatures);
  });
  describe("with args", () => {
    const { length } = getMediaFeatures();
    const { length: second } = main();
    expect(getMediaFeatures({ range: true }).length).toBeGreaterThan(length);
    expect(main({ range: true }).length).toBeGreaterThan(length);
    expect(second).toBe(length);
  });
});

describe("discrete", () => {
  expect(discreteValues).toBeDefined();
});
