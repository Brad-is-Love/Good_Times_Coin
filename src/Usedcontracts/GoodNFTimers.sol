// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GoodNFTimersLocal is ERC721Enumerable, Ownable {
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

        //mints to the initial deployer
        mint(msg.sender, 2);
    }

    // internal
    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    //mint with ONE:
    function mint(address _to, uint256 _mintAmount) public payable {
        uint256 supply = totalSupply();
        require(!paused);
        require(_mintAmount > 0);
        require(_mintAmount <= maxMintAmount);
        require(supply + _mintAmount <= maxSupply);

        if (msg.sender != owner()) {
            require(msg.value >= costONE * _mintAmount);
        }

        for (uint256 i = 1; i <= _mintAmount; i++) {
            _safeMint(_to, supply + i);
        }
    }

    //mint with GTC:
    function GTCmint(address _to, uint256 _mintAmount) public {
        uint256 supply = totalSupply();
        require(!paused);
        require(_mintAmount > 0);
        require(_mintAmount <= maxMintAmount);
        require(supply + _mintAmount <= maxSupply);

        uint256 priceGTC = _mintAmount * costGTC;

        uint256 allowance = GTC.allowance(msg.sender, address(this));
        require(allowance >= priceGTC, "Need to approve more");

        GTC.transferFrom(msg.sender, address(this), priceGTC);

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

    function withdrawONE() public payable onlyOwner {
        uint256 thisBalance = address(this).balance;
        require(payable(msg.sender).send(thisBalance));
    }

    function withdrawGTC() public payable onlyOwner {
        uint256 thisGTCBalance = GTC.balanceOf(address(this));
        GTC.transfer(msg.sender, thisGTCBalance);
    }
}
