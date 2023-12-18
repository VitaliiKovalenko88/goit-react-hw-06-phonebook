import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./conactsSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  }
})