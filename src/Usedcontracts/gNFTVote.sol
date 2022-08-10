pragma solidity ^0.5.0;

import "./ERC721Full.sol";

contract gNFTVote is ERC721Full{
    string [] public colors;
    mapping(string => bool) _colorExists;

    constructor()ERC721Full("Good NF Timers Community Vote", "GNFTV") public{

    }


  function mint(string memory _vote) public {
    require(!_voteExists[_vote]);
    uint _id = votes.push(_vote);
    require(_id < 1000, "Contract Limit Reached");
    _mint(msg.sender, _id);
    _voteExists[_vote] = true;
}
}