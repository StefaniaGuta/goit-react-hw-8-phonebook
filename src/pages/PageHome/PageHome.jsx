import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import style from './PageHome.module.css';

function PageHome() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <section className={style.PageHomeSection}>
            <h1 className={style.PageHomeTitle}>Welcome</h1>
        <p className={style.PageHomeTitle2}>Organize your contacts easily and stay connected <br></br>with loved
            ones. Use digital tools to create and maintain <br></br>a
            comprehensive contact list, and keep in touch through PHONEBOOK.
            </p>
        {!isLoggedIn && (      
          
          <p className={style.PageHomeText}> Please, <b>Sign up</b> or <b>Log in</b> to have access to the
            Phonebook!
          </p>
      )}
      </section>
      
    </>
  );
}

export default PageHome;
