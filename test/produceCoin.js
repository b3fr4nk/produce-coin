const produceCoin = artifacts.require("ProduceContract");

metadata = "test string it doesn't actually matter what is in here";

contract("ProduceContract", (accounts) => {
  it("should make 1 new produce coin", async () => {
    const produceCoinInstance = await produceCoin.deployed();
    const coin = await produceCoinInstance.awardItem(accounts[0], metadata);

    assert.notEqual(coin.valueOf(), null);
  });
});
