import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: []
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts =
        [...state.contacts, action.payload]
    },
    deleteContact: (state, action) => {
      state.contacts =
        state.contacts.filter(contact =>
          contact.id !== action.payload)
    },

  }
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;