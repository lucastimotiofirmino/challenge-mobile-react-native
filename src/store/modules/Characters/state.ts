interface ICharacterBody {
  id: string;
  name: string;
  description: string;
  favorite: boolean;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export default interface ICharacterStateReducer {
  data: ICharacterBody[];
  loading: boolean;
  refresh: boolean;
}
