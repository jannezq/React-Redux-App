const initialState = {
  favourites: {
    content: [], //<<---- this is  where the favourites jobs will be put into the new array.
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state.favourites,
        favourites: {
          ...state.favourites,
          favourites: [...state.favourites.content, action.payload], //<<-- this will push the payload(data) and put into the favourites array without mutulation between the two arrays.
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
