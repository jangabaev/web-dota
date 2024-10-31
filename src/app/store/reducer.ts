import { configureStore } from "@reduxjs/toolkit";
import analysisSlice from "./services/analysis.service";
export const store = configureStore({
  reducer: {
    [analysisSlice.reducerPath]: analysisSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(analysisSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
