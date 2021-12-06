pragma solidity >=0.8.0 <0.9.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract GTCPayments {
    address public admin;
    IERC20 public GTC;
    event PaymentDone(
        address payer,
        uint amount,
        uint paymentId,
        uint date
    );

    constructor(address adminAddress, address GTCAddress) public {
        admin = adminAddress;
        GTC = IERC20(GTCAddress);
    }

    function pay(uint amount, uint paymentId) external {
        GTC.transferFrom(msg.sender, admin, amount);
        emit PaymentDone(msg.sender, amount, paymentId, block.timestamp);
    }

}