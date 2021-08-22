import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebookAction';
const shortid = require('shortid');


const phoneReducer = createReducer({
    error: false,
    contacts: [],
    filter: [],
}, {
    [actions.btnValue]: (state, { payload }) => {
        if (!isNaN(Number(payload.valueName))) {
            return state = {
                error: true,
                contacts: [...state.contacts],
                filter: []
                }
        }
            const name = payload.valueName;
            const number = Number(payload.valueNumber);
            if (name.length === 0 || number.length === 0) {
               return state = {
                error: true,
                contacts: [...state.contacts],
                filter: []
                }
            }
            if (typeof (name) !== 'string' || typeof (number) !== 'number' || isNaN(number)) {
                return state = {
                error: true,
                contacts: [...state.contacts],
                filter: []
                }
            }
            const testName = state.contacts.find((num) => {
                return num.name === name
            })
            const testNumber = state.contacts.find((num) => {
                return num.number === number
            })
            if (testName !== undefined || testNumber !== undefined) {
                return state = {
                error: true,
                contacts: [...state.contacts],
                filter: []
                }
            } else {
                return state = {
                error: false,
                contacts: [...state.contacts, { id: shortid.generate(), name: name, number: number }],
                filter: []
            }
            }
    },
    [actions.errorAlert]: (state,_) => {
       return state = {
                error: false,
                contacts: [...state.contacts],
                filter: []
                }  
    },
    [actions.deleteContact]: (state, { payload }) => {
        const total = state.contacts.filter((num) => {
            return num.id !== payload.id
            })
            return state = {
                error: false,
                contacts: [...total],
                filter: []
            }
    },
    [actions.findContact]: (state, { payload }) => {
        if (payload.value === "") {
                return state = {
                error: false,
                contacts: [...state.contacts],
                filter: []
            }
                }
                const filter = state.contacts.filter(num => {
                return num.name.toLowerCase().includes(payload.value)
                })
                 return state = {
                error: false,
                contacts: [...state.contacts],
                filter: [...filter]
            }
    }
    })
export default phoneReducer