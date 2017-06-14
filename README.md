# chicken shit bingo

Work in progress :)

## How to run
First run `testrpc` in a new tab. Then, `truffle compile` then `truffle migrate`.

To get the JS environment going, run `npm i` then `npm run start` to run the local server. You'll see it at `http://localhost:3000/`.

## personal notes
Moving funds from testrpc account to metamask account:
```
curl -d '{"jsonrpc":"2.0","method":"eth_sendTransaction","params": [{"from":"0x6dce5de5f8fb78f0025c981f3daed015438ebdcb", "to":"0x868F9915915Ab6c458D4bCde3d4eDd2eCf095E80", "value": 18e18}], "id":1}' -X POST http://localhost:8545/
````

Inside of truffle console
```
ChickenShitBingo.deployed()
var bingo = ChickenShitBingo.at('0x520b7fb81bb8825f062acb8ea5eaf2a1232c2e6a')
bingo.newGame(9)
bingo.then(function(instance) { return instance.purchaseSquare(1, 1, {from: '0x868f9915915ab6c458d4bcde3d4edd2ecf095e80', value: 0.1})})
```
