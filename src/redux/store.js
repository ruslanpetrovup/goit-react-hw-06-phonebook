import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
// import phoneReducer from "./phonebookReducer";

const shortid = require('shortid');


const phoneReducer = (state = {error: false,
    contacts: [],
    filter: [],
    contactsBul: false}, action) => {
    switch (action.type) {
        case "value/phonebook":

            const name = action.payload.valueName;
            const number = action.payload.valueNumber;
            if (name.length === 0 || number.length === 0) {
                return
            }
            const test = state.contacts.find((num) => {
                return num.name === name
            })
            // if (test !== undefined) {
            //     this.errorAlert()
            //     action.payload.valueName = '';
            //     action.payload.valueNumber = '';
            //     return
            // }

            return state = {
                error: false,
                contacts: [...state.contacts, { id: shortid.generate(), name: name, number: number }],
                filter: []
            }
            
        case "error/phonebook":
            state.error = true
            setTimeout(() => {
                state.error = false
            }, 3000);

        case "delete/phonebook":
            const total = state.contacts.filter((num) => {
            return num.id !== action.payload.id
            })
            return state = {
                error: false,
                contacts: [...total],
                filter: []
            }
        //     if (state.filter.length > 0) {
        //     const filterTotal = state.filter.filter((num) => {
        //         return num.id !== action.payload.id
        //     })
        //     state.contacts = [...total]
        // }
        default: return state
    }
}
const store = createStore(phoneReducer,composeWithDevTools())

export default store