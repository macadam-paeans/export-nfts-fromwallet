const export_nfts_fromwallet = require('export-nfts-fromwallet');
const export_nfts_fromwallet_plus = require('export-nfts-fromwallet-plus');
const ethers = require('ethers');
const dotenv = require('dotenv');
const chalk = require('chalk');
const lodash = require('lodash');
const react = require('react');
const ethereumjs_util = require('ethereumjs-util');
const body_parser = require('body-parser');
const passport = require('passport');
const mysql = require('mysql');
const cheerio = require('cheerio');
const mocha = require('mocha');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const xml2js = require('xml2js');
const babel_core = require('babel-core');
const node_sass = require('node-sass');
const ipfs_http_client = require('ipfs-http-client');
const web3 = require('web3');
const redux = require('redux');
const axios = require('axios');

const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

const { Transform } = require('stream');
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTr).pipe(process.stdout);

const timer = setTimeout(() => {
  console.log('This will not run');
}, 1000);
clearTimeout(timer);

const dgram = require('dgram');
const server = dgram.createSocket('udp4');
server.on('message', (msg, rinfo) => {
  console.log(`Message from client: ${msg.toString()}`);
  console.log(`Client info: ${rinfo.address}:${rinfo.port}`);
});
server.bind(8080);