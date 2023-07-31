import { configureStore } from "@reduxjs/toolkit";
import loginInfoSlice from "../features/loginInfoSlice";
import registerSlice from "../features/registerSlice";
import postsSlice from "../features/postsSlice";
import sidebarSlice from "../features/sidebarSlice";

//! CREATING
const store = configureStore({
    reducer:{
        loginInfos: loginInfoSlice,
        registerInfos: registerSlice,
        postsSlice: postsSlice,
        sidebarSlice : sidebarSlice,
    }
})

export default store;