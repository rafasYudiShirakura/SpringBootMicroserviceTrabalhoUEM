import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import { thunk } from "redux-thunk";
import TaskSlice from "./TaskSlice";
import SubmissionSlice from "./SubmissionSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  task: TaskSlice,
  submission: SubmissionSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware() // Adiciona o thunk como middleware
  // Não precisa adicionar o middleware manualmente,
  // o thunk já está incluído automaticamente.
});

export default store;
