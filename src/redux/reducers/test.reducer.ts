import { TEST_ACTION } from "../actions/index.action";

const test = (state = {}, action: any) => {
  switch (action.type) {
    case TEST_ACTION: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default test;
