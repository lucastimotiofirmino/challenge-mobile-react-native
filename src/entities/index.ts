interface Character {
  id: string
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

export interface Characters {
  [id: string]: Character
}
