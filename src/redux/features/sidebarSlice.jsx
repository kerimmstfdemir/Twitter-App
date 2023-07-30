import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
    activeTab:"Home"
}

const sidebarSlice = createSlice({
    name: "sidebarSlice",
    initialState: initialStates,
    reducers: {
        changeTab:(state,action) => {
            state.activeTab = action.payload.activeTab
        },
        logoutCase: () => initialStates
    }
})

export const { changeTab, logoutCase } = sidebarSlice.actions;
export default sidebarSlice.reducer;