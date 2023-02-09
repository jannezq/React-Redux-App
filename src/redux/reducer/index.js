const initialState = {
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state.favourites,
        favourites: {
          ...state.favourites,
          favourites: [],
        },
      };
  }
};
