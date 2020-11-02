declare module '*.png';
declare module '*.jpg';
declare namespace Marvel {
  interface Character {
    id: number;
    name: string;
    description?: string;
    thumbnail?: Image;
    comics?: List;
    stories?: List;
    events?: List;
    series?: List;
  }
  interface Image {
    path?: string;
    extension?: string;
  }
  interface List {
    items?: Array<Summary>;
  }
  interface Summary {
    resourceURI?: string;
    name?: string;
    type?: string;
  }
}
