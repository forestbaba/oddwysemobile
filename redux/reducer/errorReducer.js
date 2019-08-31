import { GET_ERRORS } from "../types";

const initialState = {
  iserror: false,
  error:{}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return{ ...state, iserror: true,error: action.payload};

    default:
      return state;
  }
}
