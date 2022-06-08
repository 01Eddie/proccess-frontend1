import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import usersReducer from '../reducer';


export const store = configureStore({
  reducer: {
      users : usersReducer
  },
  middleware: [logger]
})

store.subscribe(() => {
  localStorage.state = JSON.stringify(store.getState)
})