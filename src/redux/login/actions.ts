export const updateLoginField = (fieldName: any, value: any) => ({
  type: "UPDATE_LOGIN_FIELD",
  payload: { fieldName, value },
});

export const submitLoginForm = () => ({
  type: "SUBMIT_LOGIN_FORM",
});
