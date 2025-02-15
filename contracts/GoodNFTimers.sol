// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GoodNFTimers is ERC721Enumerable, Ownable {
    using Strings for uint256;

    string public baseURI;
    string public baseExtension = ".png";
    uint256 public costONE = 420 ether;
    uint256 public maxSupply = 4269;
    uint256 public maxMintAmount = 10;
    bool public paused = false;
    string public _name = "Good NF Timers";
    string public _symbol = "GNFT";
    string public _initBaseURI =
        "https://gateway.pinata.cloud/ipfs/QmbuadHRBvXrUurbgQVYzaiRN3k22KAw7fUYR5ckhaS9xV/";

    constructor() ERC721(_name, _symbol) {
        setBaseURI(_initBaseURI);

        //mints to the initial deployer
        mint(msg.sender, 1);
    }

    // internal
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    //    function costGTC() public returns (uint256){
    //      return uint256 costGTC = 6.9*10^18 + _id
    //    }

    function mint(address _to, uint256 _mintAmount) public payable {
        uint256 supply = totalSupply();
        require(!paused);
        require(_mintAmount > 0);
        require(_mintAmount <= maxMintAmount);
        require(supply + _mintAmount <= maxSupply);

        if (msg.sender != owner()) {
            require(msg.value >= costONE * _mintAmount);
            //OR:
            //Transfer(address indexed _from, address indexed _to, uint256 _value)
            // transfer listen to events where _to matches this address
            // use the final 4 digits as 1 - 4269 (6900000000000004269)
            //

            // create a pay with ONE or pay with GTC function, if with GTC =>
            // call the transfer function within the GTC smart contract
            // subscribe to the transfer event that's emitted in the transfer function
            // require that it's gone through
        }

        for (uint256 i = 1; i <= _mintAmount; i++) {
            _safeMint(_to, supply + i);
        }
    }

    function walletOfOwner(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistant token"
        );

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        baseExtension
                    )
                )
                : "";
    }

    //only owner
    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    function withdraw() public payable onlyOwner {
        //rewrite this so that it's called every time after a mint
        //and automatically split to Raffi
        require(payable(msg.sender).send(address(this).balance));
    }
}
