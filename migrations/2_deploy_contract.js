const produceContract = artifacts.require("ProduceContract");

module.exports = function (deployer) {
  deployer.deploy(produceContract);
};
