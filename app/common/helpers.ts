import { IHero } from "./interfaces";

export function filterWithQuerySearch(results: IHero[], query: string) {
  if (query === '') {
    return results;
  }
  const regex = new RegExp(`${query}.*`, 'i');
  return results.filter((item) => regex.test(item.name));
}
