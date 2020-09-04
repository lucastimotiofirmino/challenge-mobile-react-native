import axios from 'axios';

import keys from '../../keys.json';

var md5 = require('md5');

var yourDate = new Date();  // for example

// the number of .net ticks at the unix epoch
var epochTicks = 621355968000000000;

// there are 10000 .net ticks per millisecond
var ticksPerMillisecond = 10000;

// calculate the total number of .net ticks for your date
var yts = epochTicks + (yourDate.getTime() * ticksPerMillisecond);

var h = md5(`${yts}+${keys.Privatekey}+${keys.PublicKey}`)

const api = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public',
    params: {
        apikey: keys.PublicKey,
        ts: 1,
        hash: "f1a57406a42581ca5e8cf8a2eb89c520"
    }
})

export default api;