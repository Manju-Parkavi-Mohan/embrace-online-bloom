import { describe, it as test } from "node:test";
import assert from "node:assert/strict";
import { ECU_REPAIR_STARTING_PRICE_AED, SEO_SERVICE_CONTENT } from "./service-content";

describe("Supplied ECU repair price", () => {
  test("starts from AED 200", () => {
    assert.equal(ECU_REPAIR_STARTING_PRICE_AED, 200);
  });
});

describe("Related service navigation", () => {
  const serviceSlugs = [...Object.keys(SEO_SERVICE_CONTENT), "ecu-tuning-softwares"];
  test("every contextual link resolves to an existing service", () => {
    const targets = Object.values(SEO_SERVICE_CONTENT).flatMap((page) => page.relatedSlugs);
    assert.ok(targets.length > 0);
    assert.deepEqual(targets.filter((slug) => !serviceSlugs.includes(slug)), []);
  });
});