import Contacts from "../components/contacts/Contacts";
import ContactForm from "../components/contacts/ContactForm";
import ContactFilter from "../components/contacts/contactFilter";

let HomePage = () => {
    return (
        <div className={"grid-2"}>
            <div><ContactForm/></div>
            <div>
                <ContactFilter/>
                <Contacts/>
            </div>
        </div>

    );
}

export default HomePage;
