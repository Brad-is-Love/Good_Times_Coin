pragma solidity >=0.4.21;

contract VotingForComp{

    uint256 option;
    uint256[] votes;
    mapping(address => bool) voted; 
    // address public sender;
    //     uint [] public votes;

    function vote(uint _option) public {
        // uint [] public votes = votes.push(_option);
        address sender = msg.sender;
        require(!voted[sender],'Already Voted');
        votes.push(_option);
        voted[sender]=true;
    }
    
    function seeIfVoted() public view returns(bool){
        address sender = msg.sender;
        return voted[sender];
    }
    
    function seeVotes() public view returns (uint[] memory) {
        return votes;
    }
}