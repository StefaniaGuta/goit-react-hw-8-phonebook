import React from 'react';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/contactsSelectors';
import { deleteContact } from '../../redux/contacts/contactOperations';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          {name}: {number}
          <button className={styles.button} type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      );
    })}
  </ul>
  );
};

export default ContactList;