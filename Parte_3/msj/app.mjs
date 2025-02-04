import { readFile } from 'node:fs/promises';

const text = await readFile('../../Parte_2/txt/holamundo.txt', 'utf-8');

const text2 = await readFile('../../Parte_2/txt/holamundo2.txt', 'utf-8');

console.log(text);
console.log(text2);
