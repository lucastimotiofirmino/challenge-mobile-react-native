import md5 from 'md5';

export const timestamp = Date.now();

export const publicKey = '1d95fdf1e4554b9e765797a584430e32';

const privateKey = '92b524db40d0af99dcf18fe6edb737f8f2d72cc7';

export const hash = md5(timestamp + privateKey + publicKey);
