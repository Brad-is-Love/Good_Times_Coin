const Migrations = artifacts.require("VotingForComp");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
