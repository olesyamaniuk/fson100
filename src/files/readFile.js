import path from 'path';
import fs from 'fs/promises';

const workdir = path.join(process.cwd());
console.log(workdir);
const filePath = path.join(workdir, 'src', 'text.txt');
// console.log(filePath);

// -------------------- Sync method --------------------

// const content = fs.readFileSync(filePath, 'utf-8');
// console.log(content);



// -------------------- Callback method --------------------

// fs.readFile(filePath, (err, data) => {
//   fs.writeFile('output.txt', data, (err) => {
//     console.log('write');
//   });
//   console.log('read');
//    console.log('data in file', data.toString());
// });
// console.log('finish');



// -------------------- Async method --------------------

const content = await fs.readFile(filePath, 'utf-8');
// console.log(content);


export const readTextFile = async () => {
  const content = await fs.readFile(filePath, 'utf-8');
  // console.log(content);
};

// data
(async () => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('Вміст файлу:', data);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
})();

//

(async () => {
  const data = 'Це дані, які ми записуємо у файл.';
  try {
    await fs.writeFile('output.txt', data, 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
})();
// Додаємо дані до файлу 'output.txt' / await fs.appendFile('output.txt', data, 'utf8');
(async () => {
  const data = 'Це дані, які ми додаємо до файлу.';
  try {
    await fs.appendFile('output.txt', data, 'utf8');
    console.log('Дані успішно додані до файлу.');
  } catch (err) {
    console.error('Помилка додавання даних до файлу:', err);
  }
})();
// Перейменовуємо або переміщуємо файл чи каталог зі шляху / await fs.rename('oldfile.txt', 'newfile.txt');
const data = 'Це дані, які ми записуємо у файл.';
await fs.writeFile('oldfile.txt', data, 'utf8');
  console.log('Дані успішно записані у файл.');
(async () => {
  try {
    await fs.rename('oldfile.txt', 'newfile.txt');
    console.log('Файл або каталог успішно перейменовано або переміщено.');
  } catch (err) {
    console.error('Помилка перейменування або переміщення:', err);
  }
})();
// Видаляємо файл за шляхом / await fs.unlink('output.txt');
(async () => {
  try {
    await fs.unlink('output.txt');
    console.log('Файл успішно видалено.');
  } catch (err) {
    console.error('Помилка видалення файлу:', err);
  }
})();
// Отримуємо список файлів і каталогів у поточному каталозі / const files = await fs.readdir('.');
(async () => {
  try {
    const files = await fs.readdir('.');
    console.log('Список файлів і каталогів:', files);
  } catch (err) {
    console.error('Помилка отримання списку файлів і каталогів:', err);
  }
})();
// Перевіряємо доступність файлу або каталогу за вказаним шляхом
(async () => {
  const path = 'newfile.txt';

  try {
    await fs.access(path);
    console.log(`Файл або каталог '${path}' доступний.`);
    console.log(path);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Файл або каталог '${path}' не існує.`);
    } else {
      console.error(
        `Помилка перевірки доступності файлу або каталогу '${path}':`,
        err,
      );
    }
  }
})();

