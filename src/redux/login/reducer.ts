const initialState = {
  loginFormData: {
    email: "",
    password: "",
  },
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_LOGIN_FIELD":
      return {
        ...state,
        formData: {
          ...state.loginFormData,
          [action.payload.fieldName]: action.payload.value,
        },
      };
    case "SUBMIT_LOGIN_FORM":
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;
