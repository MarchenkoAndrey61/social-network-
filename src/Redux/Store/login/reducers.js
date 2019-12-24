import { LOG_CHANGE_EMAIL_TEXT, LOG_CHANGE_PASSWORD_TEXT } from "./actions";

const defaulState = {
  email: "",
  password: ""
};

export const logReducer = (state = defaulState, action) => {
    console.log(state);
    switch (action.type){
      case LOG_CHANGE_EMAIL_TEXT: 
            return {
                ...state,
                email: action.payload
            };
      case LOG_CHANGE_PASSWORD_TEXT:
            return {
              ...state,
              password: action.payload
            };      
      
    }

    return state;
}

