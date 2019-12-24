import { REG_CHANGE_EMAIL_TEXT, REG_CHANGE_PASSWORD_TEXT, REG_CHANGE_REPEAT_PASSWORD_TEXT, REG_CHANGE_FIRST_NAME_TEXT, REG_CHANGE_LAST_NAME_TEXT } from "./actions";

const defaulState = {
  email: "",
  password: "",
  passwrod_confirmation: "",
  first_name: "",
  last_name: ""
  

};

export const regReducer = (state = defaulState, action) => {
  console.log(state);
  switch (action.type){
    case REG_CHANGE_EMAIL_TEXT: 
          return {
              ...state,
              email: action.payload
          };
    case REG_CHANGE_PASSWORD_TEXT:
          return {
            ...state,
            password: action.payload
          };  
    case REG_CHANGE_REPEAT_PASSWORD_TEXT:
          return {
            ...state,
            passwrod_confirmation: action.payload
          };
    case REG_CHANGE_FIRST_NAME_TEXT:
        return {
          ...state,
          first_name: action.payload
        }; 
    case REG_CHANGE_LAST_NAME_TEXT:
        return {
          ...state,
          last_name: action.payload
        };       
    
  }

  return state;
}

