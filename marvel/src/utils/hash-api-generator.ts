import md5 from 'md5';

export const timestamp = Date.now();

export const publicKey = '56b1104e88e0adbbf0a5b063f429b991';
// export const publicKey = 'a6fa0ff2a5229e33174ab2c5d6c30f64'; //old

const privateKey = '25f2468fbd5e69ff8910d71a755407d73470a998';
// const privateKey = 'fce8b180f88507213476d75d52f7a7fddaac599b'; // old

export const hash = md5(timestamp + privateKey + publicKey);
