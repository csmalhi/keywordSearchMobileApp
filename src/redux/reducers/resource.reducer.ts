import { GET_RESOURCES, GET_RESOURCES_SUCCESS } from "../actions/index.action";

const resource = (state = {}, action: any) => {
  switch (action.type) {
    case GET_RESOURCES_SUCCESS: {
      console.log('action', action)
      return {
        ...state,
        library: action.payload.library,
        keywords: action.payload.keywords
      }
    }
    default:
      return state;
  }
};

export default resource;
