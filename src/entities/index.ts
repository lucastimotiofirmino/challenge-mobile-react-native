export interface Character {
  id: string
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

export type Characters = Array<Character>
