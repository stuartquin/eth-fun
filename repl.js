solc = require ('solc');

Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

loadCode = function(fileName) {
  return solc.compile(fs.readFileSync(fileName).toString());
};

getContract = function(compiled, name) {
  return new web3.eth.Contract(
    JSON.parse(compiled.contracts[':' + name].interface)
  );
}

deployContract = function(compiled, name, address, args) {
  var Contract = getContract(compiled, name);
  var byteCode = compiled.contracts[':' + name].bytecode

  return Contract.deploy({
    data: byteCode,
    arguments: args
  }).send({ from: address, gas: 1500000 }).then(
    (res) => res.options.address
  );
};
