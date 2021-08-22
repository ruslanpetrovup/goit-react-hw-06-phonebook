// import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from "./phonebookReducer";






const store = configureStore({
    reducer: phoneReducer,
    devTools: process.env.NODE_ENV === "development"
})

export default store