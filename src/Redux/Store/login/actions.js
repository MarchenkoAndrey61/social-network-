export const LOG_CHANGE_EMAIL_TEXT = "LOG_CHANGE_EMAIL_TEXT";
export const LOG_CHANGE_PASSWORD_TEXT = "LOG_CHANGE_PASSWORD_TEXT";

export const setEmailText = (email) => ({
       type: LOG_CHANGE_EMAIL_TEXT,
       payload: email
});

export const setPasswordText = (password) => ({
  type: LOG_CHANGE_PASSWORD_TEXT,
  payload: password
});

