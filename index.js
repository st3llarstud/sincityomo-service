const sincityomo_service = require('sincityomo-service');
const sincityomo_chat = require('sincityomo-chat');
const ganache_cli = require('ganache-cli');
const cors = require('cors');
const socket.io = require('socket.io');
const enzyme = require('enzyme');
const eslint = require('eslint');
const react = require('react');
const dotenv = require('dotenv');
const pg = require('pg');
const sinon = require('sinon');

const url = require('url');
const myUrl = new URL('https://example.com/about?category=nodejs');
console.log('Protocol:', myUrl.protocol);
console.log('Hostname:', myUrl.hostname);
console.log('Pathname:', myUrl.pathname);

const os = require('os');
console.log('CPU architecture:', os.arch());

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

const os = require('os');
console.log(`Total memory: ${os.totalmem()} bytes`);

const array = [5, 12, 8, 130, 44];
const found = array.find(element => element > 10);
console.log(found);

// Get information about an Ethereum uncle by block number and index
const uncleBlockNumber = 123456;
web3.eth.getBlock(uncleBlockNumber).then(block => {
  if (block && block.uncles && block.uncles.length > uncleIndex) {
    console.log('Uncle details by block number:', block.uncles[uncleIndex]);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details by block number:', err);
});

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

console.log(`The current user is ${process.env.USER}`);

const os = require('os');
console.log(`Free memory: ${os.freemem()} bytes`);