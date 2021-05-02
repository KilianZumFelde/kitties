var Web3= require("web3")
var web3 = new Web3(Web3.givenProvider);
var contractaddress ="0x10bBA64aa4Cbe4a2819E18eda4477aeF3b975378";
var instance ;
var user ;


$(document).ready(function(){
  
window.ethereum.enable().then(function(accounts){

    instance = new.web3.eth.Contract(abi, contractaddress, {from: accounts[0]});
    user = accounts[0];


}).then( function(){
    instance.events.catbirth().on('data', function(event){
        alertstring = "Kitten born with following properties: id: " + event.returnValues.id +
        ", mumId: " + event.returnValues.motherID + ", dadId: " + event.returnValues.fatherID + ", genes: " +
        event.returnValues.DNA + ", Generation: " + event.returnValues.Generation + "birthtime;"+ event.returnValues.birthtime;
        console.log(alertstring);
        alert(alertstring);
    })
    })
})

$('#createCatButton').click(() =>{
  var DNA = getDna();
    //account[1] as input to send the cat, just for testing
    instance.methods.createKittyGen0(DNA, accounts[1]).send({}, function(error, txHash){
    if (error){
      alert("Cat creation failed!")
    }
    else{
      alert("Cat creation data sent with dna :" + DNA.toString())
    }
  })
})


