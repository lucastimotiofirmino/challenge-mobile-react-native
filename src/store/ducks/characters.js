const INITIAL_STATE = {
  list: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}
