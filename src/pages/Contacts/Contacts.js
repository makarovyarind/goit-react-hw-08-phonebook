import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Container } from "components/Container/Container";
import { Filter } from "components/Filter/Filter";
import { useSelector } from 'react-redux';
import './Contacts.css';

function Contacts() {
    const contacts = useSelector((state) => state.contacts.contacts.items);

    return (
        <Container>
            <h2 className="contactsTitle">Книга контактів</h2>
            <ContactForm />
            <h2 className="contactsTitle">Знайти контакт</h2>
            <Filter />
            {contacts.length === 0 ? (
                <p className="emptyMessage">Ваша телефона книга пуста. Додайте, будь-ласка, контакт</p>
            ) : (
                <ContactList />
            )}
        </Container>
    );
}

export default Contacts;
