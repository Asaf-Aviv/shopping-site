const initialState = {
  gender: {
    male: false,
    female: false,
  },
  type: {
    bags: false,
    hats: false,
    purses: false,
    shoes: false,
  },
  discount: {
    discount: false,
  },
  colors: {
    black: false,
    blue: false,
    brown: false,
    gold: false,
    green: false,
    grey: false,
    pink: false,
    red: false,
    silver: false,
    white: false,
  },
  sizes: {
    34: false,
    35: false,
    36: false,
    37: false,
    38: false,
    39: false,
    40: false,
    42: false,
    43: false,
    44: false,
  },
};

export default (state = initialState, { type, group, filter }) => {
  switch (type) {
    case 'UPDATE_FILTERS':
      return {
        ...state,
        [group]: {
          ...state[group],
          [filter]: !state[group][filter],
        },
      };
    case 'RESET_FILTERS':
      return initialState;
    default:
      return state;
  }
};
