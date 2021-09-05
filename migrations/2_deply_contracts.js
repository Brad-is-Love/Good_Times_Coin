const Migrations = artifacts.require("Color");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
