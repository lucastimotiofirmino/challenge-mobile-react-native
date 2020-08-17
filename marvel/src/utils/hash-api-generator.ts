import md5 from 'md5';

export const timestamp = Date.now();

export const publicKey = 'a6fa0ff2a5229e33174ab2c5d6c30f64'; //old

const privateKey = 'fce8b180f88507213476d75d52f7a7fddaac599b'; // old

export const hash = md5(timestamp + privateKey + publicKey);
