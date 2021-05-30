import axios from 'axios';
import {CONSTANTS} from './constants';

const getHashAndTimeStamp = () => {
  const md5 = require('md5');
  const timestamp = Date.now();
  const hash = md5(
    `${timestamp}${CONSTANTS.PRIVATE_KEY}${CONSTANTS.PUBLIC_KEY}`,
  );
  return {
    ts: timestamp,
    hash,
  };
};

export default axios.create({
  baseURL: CONSTANTS.BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  },
  params: {
    apikey: CONSTANTS.PUBLIC_KEY,
    ...getHashAndTimeStamp(),
  },
});
