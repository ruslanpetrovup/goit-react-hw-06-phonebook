import { createAction } from "@reduxjs/toolkit";

const btnValue = createAction("value/phonebook", event => ({
        payload: {
            valueName: event.target[0].value,
            valueNumber: event.target[1].value
        }
}))
const errorAlert = createAction("error/phonebook");

const deleteContact = createAction("delete/phonebook", event => ({
        payload: {
            id: event.target.id
        }
}))

const findContact = createAction("find/phonebook", event => ({
        payload: {
        value: event.target.value.toLowerCase(),
        }
}))

const ActionList = { btnValue, errorAlert, deleteContact, findContact };

export default ActionList