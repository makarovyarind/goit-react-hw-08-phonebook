import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk, getContactsThunk } from '../../redux/thunks';
import { useEffect } from 'react';

export function ContactList() {
    const contacts = useSelector((state) => state.contacts.contacts.items);
    const filterName = useSelector((state) => state.contacts.filter);
    const dispatch = useDispatch();

    const handleDeleteContact = async (contactId) => {
        await dispatch(deleteContactThunk(contactId));
        await dispatch(getContactsThunk());
    };

    const filteredContacts = (contacts, filterName) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filterName.toLowerCase()),
        );
    };

    const newContacts = filteredContacts(contacts, filterName);

    useEffect(() => {
        dispatch(getContactsThunk());
    }, [dispatch]);

    return (
        <ul className={css.list}>
            {newContacts.map(({ id, name, number }) => (
                <li className={css.item} key={id}>
                    <p className={css.contact_name}>
                        {name} 
                    </p>
                    <p>{number}</p>
                    <button className={css.deleteButton} type="button" onClick={() => handleDeleteContact(id)}>
                        Видалити
                    </button>
                </li>
            ))}
        </ul>
    );
}
