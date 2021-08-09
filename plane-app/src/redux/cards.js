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
        setCardLike:(state,action) =>{
            state.value = state.value.map(card=>{
                if(card.id == action.payload.cardData.id){
                  card.isLiked = action.payload.isLiked;
                }
                return card;
              })
        },
    },
})

export const { setCardsArray,setCardLike } = cardSlice.actions

export default cardSlice.reducer