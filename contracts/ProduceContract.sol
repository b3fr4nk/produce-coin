// contracts/GameItem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ProduceContract is ERC721URIStorage {
    uint256 private _nextTokenId;

    constructor() ERC721("Produce", "ITM") {}

    function awardItem(address recipeint, string memory metadata)
        public
        returns (uint256)
    {
        uint256 tokenId = _nextTokenId++;
        _mint(recipeint, tokenId);
        _setTokenURI(tokenId, metadata);

        return tokenId;
    }
}