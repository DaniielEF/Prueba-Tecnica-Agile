import {combineReducers, configureStore} from '@reduxjs/toolkit';
import formReducer from './formSlice'


export const store = configureStore({
    reducer: combineReducers({
        currentForm: formReducer, 
      }),
      
      // eslint-disable-next-line no-undef
      devTools: process.env.NODE_ENV === "development"
    })