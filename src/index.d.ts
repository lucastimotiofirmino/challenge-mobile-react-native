declare module '*.png';
declare module '*.jpg';
declare interface Theme {
  colors: {
    primary: string;
    background: string;
    characterBackground: string;
    text: string;
  };
}
declare namespace Redux {
  interface State {
    favorites: Marvel.Character[];
    theme: Theme;
  }
  interface Action {
    type: string;
    payload: any;
  }
}
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
  interface CharacterItem {
    item: Character;
  }
}
