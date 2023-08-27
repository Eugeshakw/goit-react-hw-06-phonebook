import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from './createSlice';

const persistConfig = {
  key: 'root',
  storage,
  whiteList:['contacts']
};

export const presistContact = persistReducer(persistConfig, contactReducer);

export const store = configureStore({ reducer: presistContact });

export const persistor = persistStore(store);



  

