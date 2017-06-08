# chicken shit bingo

Work in progress :)

## How to run
First run `testrpc` in a new tab. Then, `truffle compile` then `truffle migrate`.

To get the JS environment going, run `npm i` then `npm run start` to run the local server. You'll see it at `http://localhost:3000/`.

## personal notes
Moving funds from testrpc account to metamask account
```
curl -d '{"jsonrpc":"2.0","method":"eth_sendTransaction","params": [{"from":"0x4bd11be263835f90374f91591314b10658a73a3c", "to":"0x868F9915915Ab6c458D4bCde3d4eDd2eCf095E80", "value": 18e18}], "id":1}' -X POST http://localhost:8545/
```

Inside of truffle console
```
ChickenShitBingo.deployed()
var bingo = ChickenShitBingo.at('0xc351cc9d46453c7f073712f045c7cc831eb160fe')
bingo.newGame(9)
```
