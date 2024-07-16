import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';

import style from './PageRegistration.module.css';

function PageRegistration() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ ...form }));
    setForm({ name: '', email: '', password: '' });
  };

  const { name, email, password } = form;

  return (
    <section className={style.PageRegistrationSection}>
      <h1 className={style.PageRegistrationTitle}>Please enter your registration details</h1>
      <form onSubmit={handleSubmit}>
        <label className={style.PageRegistrationTitle}>
          Name
          <input className={style.PageRegistrationInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            placeholder="Example John"
            required
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={style.PageRegistrationTitle}>
          Email
          <input className={style.PageRegistrationInput}
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Enter your email"
            placeholder="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={style.PageRegistrationLabel}>
          Password
          <input className={style.PageRegistrationInput}       
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={style.PageRegistrationBtn} type="submit">
          Register
        </button>
      </form>
    </section>
  );
}
export default PageRegistration;
