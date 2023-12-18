import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: []
  },
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload)
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);

      state.splice(index, 1);
    },

  }
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;