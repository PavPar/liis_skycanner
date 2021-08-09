import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './cards'

export const store = configureStore({
  reducer: {
    counter: cardReducer,
  },
})