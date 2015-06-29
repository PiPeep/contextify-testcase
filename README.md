# contextify segfault testcase

This is in reference to brianmcd/contextify#170.

# Reproducing

```sh
$ npm install
$ node-0.10 --stack-size=10000 --harmony node_modules/.bin/jest
Using Jest CLI v0.4.14
Waiting on 1 test...[1]    936617 segmentation fault  ~/node-debug/bin/node --stack-size=10000 --harmony node_modules/.bin/jest
```
