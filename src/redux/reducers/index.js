const initialState = {
  favourites: {
    content: [], //<<---- this is  where the favourites jobs will be put into the new array.
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload], //<<-- this will push the payload(data) and put into the favourites array without mutulation between the two arrays.
        },
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [
            ...state.favourites.content.slice(0, action.payload),
            ...state.favourites.content.slice(action.payload + 1),
          ],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
