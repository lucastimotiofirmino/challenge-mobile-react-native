interface Thumbnail {
  path: string
  extension: string
}

export interface Character {
  id: string
  name: string
  description: string
  thumbnail: Thumbnail
}

export type Characters = Array<Character>

export interface Series {
  id: number
  title: string
  description: string
  startYear: number
  endYear: number
  thumbnail: Thumbnail
}

export type SeriesList = Array<Series>
