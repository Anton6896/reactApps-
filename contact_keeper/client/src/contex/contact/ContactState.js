import React, {useReducer} from 'react'
import {v4 as uuid} from 'uuid'
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer"

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from '../types'


let ContactState = (props) => {

    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'jim',
                email: "jim@mail.com",
                phone: "phone 1",
                type: "personal",
            },
            {
                id: 2,
                name: 'bob',
                email: "bob@mial.com",
                phone: "phone 2",
                type: "personal",
            },
            {
                id: 3,
                name: 'jonny',
                email: "jonny@mial.com",
                phone: "phone 3",
                type: "professional",
            },
        ],
        current: null, filtered: null
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState)


    // add
    let addContact = (contact) => {
        contact.id = uuid()
        dispatch({type: ADD_CONTACT, payload: contact})
    }
    // delete
    let deleteContact = (id) => {
        dispatch({type: DELETE_CONTACT, payload: id})
    }
    // update
    let updateContact = (contact) => {
        dispatch({type: UPDATE_CONTACT, payload: contact})
        clearCurrent()
    }

    // set current
    let setCurrent = (contact) => {
        dispatch({type: SET_CURRENT, payload: contact})
    }
    // filter
    let filterContacts = (text) => {
        dispatch({type: FILTER_CONTACTS, payload: text})
    }
    // clear filter
    let clearFilterContacts = () => {
        dispatch({type: CLEAR_FILTER})
    }
    // clear current
    let clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    }


    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact, deleteContact, setCurrent, clearCurrent,
            updateContact, filterContacts, clearFilterContacts
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState