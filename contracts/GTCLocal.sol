pragma solidity >=0.8.0 <0.9.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract GTCLocal is ERC20 {
    constructor() ERC20('GTCLocal', 'GTCL') public {}

    function faucet(address to, uint amount) external {
        _mint(to, amount);
    }
}