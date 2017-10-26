var abi = [{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

var contractAddress = "0xEa272361a7064461110a29f10ce94EeC8dD71344"
var greetContract = web3.eth.contract(abi);
var instance = greetContract.at(contractAddress)

instance.greet(function(err, result) {
  if (err) {
    console.error(err);
  }
  console.log(result);
});
