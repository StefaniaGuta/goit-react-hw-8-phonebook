import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import style from './PageContacts.module.css';

function PageContacts() {
  return (
    <section className={style.PageContactSection}>
      <h1 className={style.PageContactTitle}>PHONEBOOK APP</h1>
      <h2>Add new contact</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
}

export default PageContacts;