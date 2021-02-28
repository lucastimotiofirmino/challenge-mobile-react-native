export interface Characters {
  [id: string]: {
    id: string
    name: string
    description: string
    thumbnail: {
      path: string
      extension: string
    }
  }
}
