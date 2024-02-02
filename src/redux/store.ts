import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import registerReducer from "./register/registerSlice";
import loginReducer from "./login/loginSlice";
import themeReducer from "./themeSlice";
import pageReducer from "./pageSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    theme: themeReducer,
    pageTranisition: pageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
