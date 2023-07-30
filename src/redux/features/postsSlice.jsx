import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
    posts:[]
}

const postsSlice = createSlice({
    name: "postsSlice",
    initialState: initialStates,
    reducers: {
        getPosts:(state,action) => {
            state.posts = action.payload.posts
        },
        logoutCase: () => initialStates
    }
})

export const { getPosts, logoutCase } = postsSlice.actions;
export default postsSlice.reducer;