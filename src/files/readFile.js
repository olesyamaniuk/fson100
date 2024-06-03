import path from 'path';
import fs from 'fs/promises';

const workdir = path.join(process.cwd());

const filePath = path.join(workdir, 'src', 'text.txt');

/*
-------------------- Sync method --------------------

const content = fs.readFileSync(filePath, 'utf-8');
console.log(content);
/*

/*
-------------------- Callback method --------------------

fs.readFile(filePath, (err, data) => {
  fs.writeFile('output.txt', data, (err) => {
    console.log('write');
  });
  console.log('read');
   console.log('data in file', data.toString());
});
console.log('finish');
*/

/*
-------------------- Async method --------------------

const content = await fs.readFile(filePath, 'utf-8');
console.log(content);
*/

export const readTextFile = async () => {
  const content = await fs.readFile(filePath, 'utf-8');
  console.log(content);
};
