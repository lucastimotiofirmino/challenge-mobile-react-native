declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare namespace Marvel {
  interface Character {
    id: number; // The unique ID of the character resource.
    name: string; // The name of the character.
    description?: string; // A short bio or description of the character.
    modified?: Date; // The date the resource was most recently modified.
    resourceURI?: string; // The canonical URL identifier for this resource.
    urls?: Url[]; // A set of public web site URLs for the resource.
    thumbnail?: Image; // The representative image for this character.
    comics?: ComicList; // A resource list containing comics which feature this character.
    stories?: StoryList; // A resource list of stories in which this character appears.
    events?: EventList; // A resource list of events in which this character appears.
    series?: SeriesList; // A resource list of series in which this character appears.
  }

  interface Url {
    type?: string; // A text identifier for the URL.
    url?: string; // A full URL (including scheme, domain, and path).
  }

  interface Image {
    path?: string; // The directory path of to the image.
    extension?: string; // The file extension for the image.
  }

  interface ComicList {
    available?: number; // The number of total available issues in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number; // The number of issues returned in this collection (up to 20).,
    collectionURI?: string; // The path to the full list of issues in this collection.,
    items?: Array<object>; // optional): The list of returned issues in this collection.
  }

  interface ComicSummary {
    resourceURI?: string; // The path to the individual comic resource.,
    name?: string; // The canonical name of the comic.
  }

  interface StoryList {
    available?: number; // The number of total available stories in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number; // The number of stories returned in this collection (up to 20).,
    collectionURI?: string; // The path to the full list of stories in this collection.,
    items?: Array<object>; // optional): The list of returned stories in this collection.
  }

  interface StorySummary {
    resourceURI?: string; // The path to the individual story resource.,
    name?: string; // The canonical name of the story.,
    type?: string; // The type of the story (interior or cover).
  }

  interface EventList {
    available?: number; // The number of total available events in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number; // The number of events returned in this collection (up to 20).,
    collectionURI?: string; // The path to the full list of events in this collection.,
    items?: Array<object>; // optional): The list of returned events in this collection.
  }

  interface EventSummary {
    resourceURI?: string; // The path to the individual event resource.,
    name?: string; // The name of the event.
  }

  interface SeriesList {
    available?: number; // The number of total available series in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number; // The number of series returned in this collection (up to 20).,
    collectionURI?: string; // The path to the full list of series in this collection.,
    items?: Array<object>; // optional): The list of returned series in this collection.
  }

  interface SeriesSummary {
    resourceURI?: string; // The path to the individual series resource.,
    name?: string; // The canonical name of the series.
  }
}
