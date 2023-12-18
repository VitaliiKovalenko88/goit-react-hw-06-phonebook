import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: []
  },
  reducers: {
    addContact: (state, action) => {
      console.log(state.contacts)
      state.contacts.push(action.payload)
    },
    deleteContact: (state, action) => {
      const index = state.contacts.findIndex(task => task.id === action.payload.id);

      state.contacts.splice(index, 1);
    },

  }
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;