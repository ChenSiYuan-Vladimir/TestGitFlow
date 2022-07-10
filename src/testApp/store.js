import { configureStore } from '@reduxjs/toolkit'
import { PetReducer } from './dao/reducer'


export const store = configureStore({
  reducer:{
    pet: PetReducer
  }
})