import md5 from 'md5';
import { publicKey, privateKey } from './constants';

export const timestamp = Date.now();
export const hashKey = md5(timestamp + privateKey + publicKey);
