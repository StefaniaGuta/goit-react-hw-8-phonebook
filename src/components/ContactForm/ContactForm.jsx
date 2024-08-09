import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { addContact }  from '../../redux/contacts/contactOperations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    if(number.length !== 10){
      alert('Your contact need to have 10 numbers');
      return;
    };

    const NumberExistInTheList = contacts.some(
      contact => contact.number.trim() === number.trim()
    );

    if(NumberExistInTheList){
      alert(`${number} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <section className={styles.form}>
    <form className={styles.form__container} onSubmit={handleSubmit}>
      <label className={styles.form__label}>Name</label>
      <input
        type="text"
        name="name"
        value={name} 
        className={styles.form__input}
        onChange={handleChange}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Enter name"
        required
      />
      <label className={styles.form__label}>Number</label>
      <input
        type="tel"
        name="number"
        value={number} 
        className={styles.form__input}
        onChange={handleChange}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="Enter phone number"
        required
      />
      <button className={styles.form__btn} type="submit">
        Add contact
      </button>
    </form>
  </section>
  );
};

export default ContactForm;