import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import actionPhonebook from '../redux/phonebookAction'
import '../index.css';

const Contact = ({ contacts, delet }) => {
    return (
        <TransitionGroup component="ul" classNames="TaskList">
        {
                contacts.map((num) => {
                return (
                    <CSSTransition key={num.id} timeout={250}  classNames="TaskList-item">
                        <li className="TaskList-item" id={num.id}><p>{num.name}</p><p>{num.number}</p>
                            <button id={num.id} type="button" className="btndel" onClick={delet}>
                                Delete
                            </button>
                            </li>
                    </CSSTransition>
                )
            })
        }
        </TransitionGroup>
    )
}
const mapStateToProps = state => {
  return {
    contacts: state.contacts
  }
}
const mapDispatchToprops = dispatch => {
  return {
    delet: (event) => dispatch(actionPhonebook.deleteContact(event)),
  }
}
export default connect(mapStateToProps,mapDispatchToprops)(Contact)