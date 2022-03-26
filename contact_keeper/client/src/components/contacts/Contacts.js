import ContactContext from "../../contex/contact/ContactContext";
import {Fragment, useContext} from 'react'
import ContactItem from "./ContactItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";


/* CSSTransition and TransitionGroup is create an fade out effect  */
let Contacts = () => {

    let context = useContext(ContactContext)

    return (

        <Fragment>
            <TransitionGroup className={""}>
                {
                    context.filtered ?
                        context.filtered.map(
                            contact =>
                                <CSSTransition // fade effect
                                    key={contact.id} 
                                    timeout={500} 
                                    classNames={"item"}>
                                    <ContactItem contact={contact}/>
                                </CSSTransition>
                        ) :
                        context.contacts.map(
                            contact =>
                                <CSSTransition
                                    key={contact.id} 
                                    timeout={500} 
                                    classNames={"item"}>
                                    <ContactItem contact={contact}/>
                                </CSSTransition>
                        )
                }
            </TransitionGroup>
        </Fragment>


    );
}

export default Contacts;