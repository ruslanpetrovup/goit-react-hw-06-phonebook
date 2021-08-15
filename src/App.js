import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Contacts from './components/Contacts';
import { connect } from 'react-redux';
import './index.css';
import actionPhonebook from './redux/phonebookAction';
const shortid = require('shortid');
var debounce = require('lodash.debounce');


const App = ({ error, btnValue, contacts, filter, deleteContact, findContact }) => {
  return (
    <>
      <header>
        <CSSTransition in={true} appear timeout={500} classNames="logo" >
          <h1 className="logo">Phonebook</h1>
        </CSSTransition>
        <CSSTransition in={error} timeout={500} classNames="error" unmountOnExit>
          <h1 className="error">Contact already exist</h1>
        </CSSTransition>
      </header>
      <main>
        <form onSubmit={btnValue} className="addForm">
          <p>Name</p>
          <input type="text" className="nameInp" />
          <p>Number</p>
          <input type="tel" className="numberInp" />
          <button type="submit" className="btnSub" >Add Contact</button>
        </form>
        {contacts.length > 0 ? <div className="filter">
          <p className="textFilter">Find contacts by name</p>
          <input type="text" className="filterInp" onChange={debounce(findContact, 1000)} />
        </div> : null}
        <div id="ListContacts">
          {filter.length > 0 ? <Contacts contacts={filter} delet={deleteContact}/> : <Contacts/>}
        </div>
      </main>
    </>
  )
}
const mapStateToProps = state => {
  return {
    error: state.error,
    contacts: state.contacts,
    filter: state.filter,
  }
}
const mapDispatchToprops = dispatch => {
  return {
    btnValue: (event) => {
      event.preventDefault()
      dispatch(actionPhonebook.btnValue(event))
      event.target[0].value = "";
      event.target[1].value = "";
    },
    // deleteContact: (event) => dispatch(actionPhonebook.deleteContact(event)),
    findContact: () => dispatch(actionPhonebook.findContact())
  }
}
export default connect(mapStateToProps,mapDispatchToprops)(App)
// btnValue = (event) => {
  //   event.preventDefault()
  //   const valueName = event.target[0].value;
  //   const valueNumber = event.target[1].value;
  //   if (valueName.length === 0 || valueNumber.length === 0) {
  //     return
  //   }
  //   const test = contacts.find((num) => {
  //     return num.name === valueName
  //   })
  //   if (test !== undefined) {
  //     errorAlert()
  //     event.target[0].value = '';
  //     event.target[1].value = '';
  //     return
  //   }

  //   setState({
  //     contactsBul: true
  //   })
  //   contacts.push({ id: shortid.generate(), name: valueName, number: valueNumber });
  //   event.target[0].value = '';
  //   event.target[1].value = '';
  // }
  // errorAlert = () => {
  //   setState({
  //     error: true
  //   })
  //   setTimeout(() => {
  //     setState({
  //       error: false
  //     })
  //   }, 3000);
  // }
  // deleteContact = (even) => {
  //   const total = contacts.filter((num) => {
  //     return num.id !== even.target.id
  //   })
  //   setState({
  //     contacts: [...total]
  //   })
  //   if (filter.length > 0) {
  //     const total = filter.filter((num) => {
  //       return num.id !== even.target.id
  //     })
  //     setState({
  //       filter: [...total]
  //     })
  //   }
  // }
  // findContact = (even) => {
  //   if (even.target.value === "") {
  //     return
  //   }
  //   const filter = contacts.filter(num => {
  //     return num.name.includes(even.target.value)
  //   })
  //   setState({
  //     filter: [...filter]
  //   })
  // }
  // const contacts = contacts