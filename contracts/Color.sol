pragma solidity ^0.5.0;

import "./ERC721Full.sol";

contract Color is ERC721Full{
    string [] public colors;
    mapping(string => bool) _colorExists;

    constructor()ERC721Full("Sentences", "GTS") public{

    }


  function mint(string memory _color) public {
    require(!_colorExists[_color]);
    uint _id = colors.push(_color);
    require(_id < 6970, "Contract Limit Reached");
    _mint(msg.sender, _id);
    _colorExists[_color] = true;
}
}