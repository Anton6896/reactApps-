import ContactContext from "../../contex/contact/ContactContext";
import {useContext, useState, useEffect} from 'react'


let ContactForm = () => {

    let context = useContext(ContactContext)

    let [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    })

    useEffect(() => {
        if (context.current) {
            setContact(context.current)
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
        // always add deps !
    }, [context])

    let {name, email, phone, type} = contact

    let onChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    let onSubmit = (e) => {
        // grub data from the form and push it to context state
        e.preventDefault()

        // rise error if empty
        if (!email) {
            alert('you must fill data !')
        } else {
            if (context.current) {
                // update contact
                context.updateContact(contact)
            } else {
                context.addContact(contact)
            }

            // clear all fields
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }

    let pushCancel = () => {
        context.clearCurrent()
    }

    return (
        <div>
            <form onSubmit={onSubmit}>

                <h2 className={'text-primary'}>{context.current ? 'Edit Contact' : "Add Contact"}</h2>

                <input type={'text'} placeholder={'Name'} name={'name'} value={name} onChange={onChange}/>
                <input type={'email'} placeholder={'Email'} name={'email'} value={email} onChange={onChange}/>
                <input type={'text'} placeholder={'Phone'} name={'phone'} value={phone} onChange={onChange}/>
                <h5>contact type</h5>
                <input type={'radio'} name={'type'} value={'personal'} checked={type === 'personal'} onChange={onChange}
                /> Personal{' '}
                <input type={'radio'} name={'type'} value={'professional'} checked={type === 'professional'}
                       onChange={onChange}
                /> Personal{' '}

                {
                    context.current ?
                        <div>
                            <button className="btn btn-primary " type={'submit'}>Edit</button>
                            <button className="btn btn-light " onClick={pushCancel}>Cancel</button>
                        </div>

                        : <button className="btn btn-primary btn-block" type={'submit'}>Add contact</button>
                }

            </form>
        </div>

    );
}

export default ContactForm;