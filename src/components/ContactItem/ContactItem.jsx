import style from './ContactItem.module.css'
import { RotatingLines } from 'react-loader-spinner';
import { useDeleteContactMutation } from '../../redux/contacts/contactsApi';

function ContactItem({ id, name, number}) {const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  
    return (
        <item className={style.Item} key={id}>
            <p>
                {name}: {number} {' '}
            </p>
            <button className= {style.Button} type="button" onClick={() => deleteContact(id)}
        disabled={isDeleting}>
               {isDeleting && <RotatingLines width="10" />}  Delete
            </button>
        </item>
    );
};

export default ContactItem;
