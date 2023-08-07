import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "items",
    initialState: {
        items: []
    },
    reducers: {
        getItem : (state, action) => {
            state.items = action.payload.map(item => {
                return {id: item._id, name: item.name, desc: item.desc, price: item.price}
            })
        },
        addItem : (state, action) => {
            state.items.push(action.payload)
        },
        updateItem: (state, action) => {
            const index = state.items.findIndex(x => x.id === action.payload.id)
            state.items[index] = {
                id: action.payload.id,
                name: action.payload.name,
                desc: action.payload.desc,
                price: action.payload.price,
            }
        },
        deleteItem: (state, action) => {
            const id = action.payload.id;
            state.items = state.items.filter(u => u.id !== id)
        }
    }
})

export const {getItem, addItem, updateItem, deleteItem} = itemSlice.actions;
export default itemSlice.reducer;
