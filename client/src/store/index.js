import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import professionReducer from "../features/fill-form/Profile/professionSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    profession: professionReducer,
  },
});

export default store;
