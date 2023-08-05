import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {
        getUser : (state, action) => {
            state.users = action.payload.map(user => {
                return {id: user._id, name: user.name, desc: user.desc, price: user.price}
            })
        },
        addUser : (state, action) => {
            state.users.push(action.payload)
        },
        updateUser: (state, action) => {
            const index = state.users.findIndex(x => x.id === action.payload.id)
            state.users[index] = {
                id: action.payload.id,
                name: action.payload.name,
                desc: action.payload.desc,
                price: action.payload.price,
            }
        },
        deleteUser: (state, action) => {
            const id = action.payload.id;
            state.users = state.users.filter(u => u.id !== id)
        }
    }
})

export const {getUser, addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;