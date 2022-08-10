pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {

    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Harmony testnet
     * Aggregator: ONE/USD
     * Address: 0xcEe686F89bc0dABAd95AEAAC980aE1d97A075FAD
     */
    constructor() public {
        priceFeed = AggregatorV3Interface(0xcEe686F89bc0dABAd95AEAAC980aE1d97A075FAD);
    }

    /**
     * Returns the latest price
     */
    function getThePrice() public view returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
    }
}
