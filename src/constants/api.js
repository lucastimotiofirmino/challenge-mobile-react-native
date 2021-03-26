import Config from 'react-native-config';

const { MARVEL_PUBLIC_KEY, TS, HASH } = Config;

export const MARVEL_API_PARAMS = `ts=${TS}&apikey=${MARVEL_PUBLIC_KEY}&hash=${HASH}`;

export const MARVEL_API = 'https://gateway.marvel.com/v1/public';

export const GET_CHARACTERS = `/characters`;
export const GET_EVENTS = `/events`;
export const GET_SERIES = `/series`;
