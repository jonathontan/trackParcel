import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { jobReducer } from "./jobSlice";
import { uiReducer } from "./uiSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  job: jobReducer
});

const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;

export default store;
