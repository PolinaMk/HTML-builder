const fs = require('fs');
const path = require('path');
const { stdout } = process;

const getDoc = () => {
  const document = path.join(__dirname, 'text.txt');
  let threadFileRead = fs.createReadStream(document, 'utf-8');
  threadFileRead.on('data', (chunk) => {
    stdout.write(chunk);
  });
};
getDoc();