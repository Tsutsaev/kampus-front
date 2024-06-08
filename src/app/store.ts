import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import applicationSlice from "../features/applicationSlice"
import chatSlice from "../features/chatSlice";

export const store = configureStore({
  reducer: {
    userSlice,
    chatSlice,
    applicationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;