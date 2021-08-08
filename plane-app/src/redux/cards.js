import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCardsArray: (state,action) => {
            state.value = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCardsArray } = cardSlice.actions

export default cardSlice.reducer