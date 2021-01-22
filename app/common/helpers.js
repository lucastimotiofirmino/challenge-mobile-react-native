export function filterWithQuerySearch(results, query) {
  if (query === '') {
    return results;
  }
  const regex = new RegExp(`${query}.*`, 'i');
  return results.filter((item) => regex.test(item.name));
}
