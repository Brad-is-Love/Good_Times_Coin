// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BookNFT{
    /*Chainlink links:
    https://docs.harmony.one/home/developers/tools/oracles/chainlink
    https://docs.chain.link/docs/harmony-price-feeds/
    https://blog.chain.link/fetch-current-crypto-price-data-solidity/
    */
    /*GraphQL API DFK
    https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql
    */
    
    //Define variables
    IERC20 public GTC;
    using Strings for uint256;
    string public baseURI;
    string public baseExtension = ".json";
    uint256 public costONE = 420 ether;
    uint256 public costGTC = 6.9 ether;
    uint256 public maxSupply = 4269;
    uint256 public maxMintAmount = 10;
    bool public paused = false;
    string public _name = "Good NF Timers";
    string public _symbol = "GNFT";
    string public _initBaseURI =
        "https://gateway.pinata.cloud/ipfs/QmVHiVZ2LfFiD8xfAVh1YqRQcMmHmfsTRPBmSVTnRUMGQP/";

    constructor(address GTCAddress) ERC721(_name, _symbol) {
        setBaseURI(_initBaseURI);
        GTC = IERC20(GTCAddress);    
}