interface ICharacterBody {
  id: string;
  name: string;
  description: string;
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
