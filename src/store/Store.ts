import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../reducers/User";

export default configureStore({
  reducer: {
    reducer: userSlice.reducer,
  },
});
