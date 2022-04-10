
import { server } from "../../utils/fetch";
import {
  FETCHING_OUR_TEAM_CONTENT_FAILURE,
  FETCHING_OUR_TEAM_CONTENT_SUCCESS,
  OUR_TEAM_SPINNER_STARTS,
  OUR_TEAM_SPINNER_STOPS,
  START_FETCHING_OUR_TEAM_CONTENT,
} from "./ourTeamActionTypes";
const INITIAL_STATE = {
  ourTeam: [],
  ourTeamSpinner: false,

  error: null,
};

export const ourTeamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_OUR_TEAM_CONTENT:
      return {
        ...state,
      };

    case FETCHING_OUR_TEAM_CONTENT_SUCCESS:
      return {
        ...state,

        ourTeam: action.payload.ourTeam.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        ),
      };
    case FETCHING_OUR_TEAM_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case OUR_TEAM_SPINNER_STOPS:
      return {
        ...state,
        publicationSpinner: false,
      };
    case OUR_TEAM_SPINNER_STARTS:
      return {
        ...state,
        publicationSpinner: true,
      };

    default:
      return state;
  }
};
