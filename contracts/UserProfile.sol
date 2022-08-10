// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0;

//Simple contract to assign a username to an address
//Blacklist function to prevent publishing more NFTs

contract UserProfile {
    mapping(address=>string) public userNames;
    address[] public userAccounts;

    function getNameByAddress(address _userAcc) public view returns (string memory) {
        return userNames[_userAcc];
    }

    function setUserName(address _userAcc, string memory _name) public {
        require(_userAcc==msg.sender, "You can only change your own user name");
        userNames[_userAcc] = _name;
    }
}