pragma solidity ^0.5.0;

import "./ERC721Full.sol";

contract Voting is ERC721Full{
    string [] public votes;
    mapping(string => bool) _voteExists;

    constructor()ERC721Full("GNFT Community Votes", "GCV") public{

    }

  function mint(string memory _vote) public {
    require(!_voteExists[_vote]);
    uint _id = votes.push(_vote);
    require(_id < 1001, "Contract Limit Reached");
    _mint(msg.sender, _id);
    voteExists[_vote] = true;
}}