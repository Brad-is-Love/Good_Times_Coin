pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GoodNFTimers is ERC721{
    constructor()
    ERC721("Good NF Timers", "GNFT")
    {
    
    }

    function createCollectible(string memory tokenURI)
    public returns (bytes32){
        
    }

}
