interface ICharacterBody {
  id: string;
  nome: string;
}

export default interface ICharacterStateReducer {
  data: ICharacterBody;
  loading: boolean;
}
