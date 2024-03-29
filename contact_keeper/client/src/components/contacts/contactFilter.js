import React, {useContext, useState} from 'react'
import ContactContext from "../../contex/contact/ContactContext";

let ContactFilter = () => {

    let context = useContext(ContactContext)
    let [text, setText] = useState('')


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
        }}>
            <input type="text" placeholder={'filter'} value={text}
                   onChange={e => {
                       if (e.target.value) {
                           setText(e.target.value);
                           context.filterContacts(text)
                       } else {
                           context.clearFilterContacts()
                       }
                   }}
            />

            {
                (text !== '') &&
                <button className="btn btn-light btn-block"
                        onClick={() => {
                            context.clearFilterContacts()
                            setText('')
                        }}>clear</button>
            }
        </form>
    );
}

export default ContactFilter