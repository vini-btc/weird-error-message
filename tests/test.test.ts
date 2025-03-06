import { describe, it } from "vitest";

const accounts = simnet.getAccounts();
const address1 = accounts.get("wallet_1")!;

describe("example tests", () => {
  it("ensures simnet is well initialised", () => {
    simnet.callPublicFn("doesnt-exist", "method-also", [], address1);
  });
});
