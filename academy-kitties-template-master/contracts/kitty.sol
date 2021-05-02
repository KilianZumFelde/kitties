pragma solidity 0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract kitties is ERC721, Ownable {

    constructor () ERC721("Kilcat", "KLC") Ownable(){
    }

    event catbirth(uint256 id, uint256 motherID, uint256 fatherID, uint256 DNA, uint256 Generation, uint64 birthtime);

    struct cat {
        uint256 motherID;
        uint256 fatherID;
        uint256 DNA;
        uint256 Generation;
        uint64 birthtime;
    }
    cat[] cats;

    function createKittyGen0(uint256 _DNA, address _to) public onlyOwner {
    _createkitty(0, 0, _DNA, 0);
    _safeMint( _to, cats.length-1);
    }

    function _createkitty(uint256 _motherID, uint256 _fatherID, uint256 _DNA, uint256 _Generation) private {
    cat memory _newcat= cat(_motherID, _fatherID, _DNA, _Generation, uint64(block.timestamp));
    cats.push(_newcat);
    emit catbirth(cats.length-1, _motherID, _fatherID, _DNA, _Generation, uint64(block.timestamp));
    }

    function getcat(uint256 ID) public view returns(cat memory){
    require(cats.length - 1 >= ID); 
    return cats[ID]; 
    }
}