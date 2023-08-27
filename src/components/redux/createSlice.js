import { createSlice } from "@reduxjs/toolkit";

const initialState = {contacts: [], filter: ''}

const contactsSlice = createSlice({

  name: 'contacts',
  initialState,
  reducers: {
    
      createContact: { reducer: (state, {payload}) => {
      state.contacts.push(payload)
      
    }}, 
    
    deleteContact: 
      (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload) 
    }, 

    updateFilter: (state, {payload}) => {
      state.filter = payload
    },
  }
  
})


export const contactReducer = contactsSlice.reducer;
export const { createContact, deleteContact, updateFilter } = contactsSlice.actions;