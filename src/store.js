import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "./catState";
import catSaga from "./catSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: [saga],
});
saga.run(catSaga);
