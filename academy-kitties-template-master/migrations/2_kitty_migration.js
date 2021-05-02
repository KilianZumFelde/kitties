const Migrations = artifacts.require("kitties");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
