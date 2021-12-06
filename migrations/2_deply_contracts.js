const Migrations = artifacts.require("GoodNFTimers");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
