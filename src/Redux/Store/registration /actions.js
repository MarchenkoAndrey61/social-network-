
export const REG_CHANGE_EMAIL_TEXT = "REG_CHANGE_EMAIL_TEXT";
export const REG_CHANGE_PASSWORD_TEXT = "REG_CHANGE_PASSWORD_TEXT";
export const REG_CHANGE_REPEAT_PASSWORD_TEXT = "REG_CHANGE_REPEAT_PASSWORD_TEXT";
export const REG_CHANGE_FIRST_NAME_TEXT = "REG_CHANGE_FIRST_NAME_TEXT";
export const REG_CHANGE_LAST_NAME_TEXT = "REG_CHANGE_LAST_NAME_TEXT";


export const setEmailText = (email) => ({
    type: REG_CHANGE_EMAIL_TEXT,
    payload: email
});

export const setPasswordText = (password) => ({
    type: REG_CHANGE_PASSWORD_TEXT,
    payload: password
});

export const setpasswrod_confirmationText = (password) => ({
    type: REG_CHANGE_REPEAT_PASSWORD_TEXT,
    payload: password
  });

  export const setfirst_nameText = (first_name) => ({
    type: REG_CHANGE_FIRST_NAME_TEXT,
    payload: first_name
  });

  export const setlast_nameText = (last_name) => ({
    type: REG_CHANGE_LAST_NAME_TEXT,
    payload: last_name
  });