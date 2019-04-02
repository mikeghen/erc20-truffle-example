const TestToken = artifacts.require("./TanganyTestToken.sol");
module.exports = function(deployer) {
    deployer.deploy(TestToken);
};
