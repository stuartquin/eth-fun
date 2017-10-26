Requires node 6+

## Setup
```
npm install ethereumjs-testrpc web3

# Run RPC
./node_modules/.bin/testrpc
```

## Load contract
```
node

.load repl.js

var compiled = loadCode("Greeting.sol")
var addr = // Address from testrpc

var Contract = getContract(compiled, "greeter")
deployContract(compiled, "greeter", addr, ["Hello world..."]).then(
  (address) => Contract.options.address = address
)

Contract.options.address
```
