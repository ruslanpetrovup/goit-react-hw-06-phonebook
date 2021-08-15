const btnValue = event => ({
        type: "value/phonebook",
        payload: {
            valueName: event.target[0].value,
            valueNumber: event.target[1].value
        }
    

})
const errorAlert = () => ({
        type: "error/phonebook",
        payload: {
            error: true
        }
    
})
const deleteContact = event => ({
        type: "delete/phonebook",
        payload: {
            id: event.target.id
        }
})
const findContact = event => ({
    type: "find/phonebook",
    payload: {
        value: 'Suka',
        name: event
        },
});

export default {btnValue,errorAlert,deleteContact,findContact}