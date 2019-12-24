export const REG_CHANGE_USERNAME_TEXT = "REG_CHANGE_USERNAME_TEXT";
export const REG_CHANGE_EMAIL_TEXT = "REG_CHANGE_EMAIL_TEXT";
export const REG_CHANGE_PASSWORD_TEXT = "REG_CHANGE_PASSWORD_TEXT";
export const REG_CHANGE_REPEAT_PASSWORD_TEXT = "REG_CHANGE_REPEAT_PASSWORD_TEXT";

export const setUserNameText = (username) => ({
    type: REG_CHANGE_USERNAME_TEXT,
    payload: username
});

export const setEmailText = (email) => ({
    type: REG_CHANGE_EMAIL_TEXT,
    payload: email
});

export const setPasswordText = (password) => ({
    type: REG_CHANGE_PASSWORD_TEXT,
    payload: password
});

export const setRepeatPasswordText = (password) => ({
    type: REG_CHANGE_REPEAT_PASSWORD_TEXT,
    payload: password
  });

