//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Gasoline is ERC1155, Ownable {
    uint8 public constant BAD = 1;
    uint8 public constant GOOD = 2;
    uint8 public constant EXCELLENT = 3;

    constructor() ERC1155("") {}

    function fill(uint8 _type, uint256 _value) external onlyOwner {
        require(_type >= BAD && _type <= EXCELLENT, "No such gasoline!");
        _mint(msg.sender, _type, _value, "");
    }
}