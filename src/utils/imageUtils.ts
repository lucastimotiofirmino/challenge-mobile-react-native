export const replaceHttpToHttps = (url: string) => {
  return `${url}`.replace('http', 'https');
};
