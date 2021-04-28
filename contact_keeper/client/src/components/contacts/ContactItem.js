import propTypes from 'prop-types'
import {useContext} from 'react'
import ContactContext from "../../contex/contact/ContactContext";

let ContactItem = ({contact}) => {
    let context = useContext(ContactContext)
    let {id, name, email, phone, type} = contact

    let pushDelete = () => {
        context.deleteContact(id)
        context.clearCurrent()
    }

    let pushEdit = () => {
        context.setCurrent(contact)
    }

    return (
        <div className={"card bg-light"}>
            <h3 className="text-primary text-left">{name}{' '}
                <span
                    className={"badge " + (type === 'personal' ? "badge-success" : "badge-primary")}
                    style={{float: "right"}}
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className="list">
                {
                    email && (<li>
                        <i className="fas fa-envelope-open"></i> {email}
                    </li>)
                }
                {
                    phone && (<li>
                        <i className="fas fa-phone"></i> {phone}
                    </li>)
                }
            </ul>
            <p>
                <button onClick={pushEdit} className="btn btn-dark btn-sm">Edit</button>
                <button onClick={pushDelete} className="btn btn-danger btn-sm">Delete</button>
            </p>

        </div>
    );
}

ContactItem.prototype = {
    contact: propTypes.object.isRequired
}

export default ContactItem;