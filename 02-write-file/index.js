const fs = require('fs');
const {stdout} = process;
const readline = require('node:readline');
const path = require('path');
const Emitter = require('events');

const emitter = new Emitter();
const filePath = path.join(__dirname, 'note.txt');
const stream = fs.createWriteStream(filePath, {flags: 'a'});
const rl = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout,
  });

stdout.write(`Please, press Ctrl+C or type "exit" to exit\n`);
rl.on('SIGINT', () => {
  console.log('Thank you! Have a great day!');
  rl.close()
});
rl.on('line', (input) => {
  emitter.emit('closeApp', input);
  stream.write(input);
  console.log('Oh,super! What\'s next?');
})
emitter.on('closeApp', (exit) => {
  if (exit.toLowerCase() === 'exit') {
    console.log('Thank you! Have a great day!');
    process.exit();
  }
});