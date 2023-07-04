import React, { useState } from 'react';
import css from './LogIn.module.css';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/thunks';

export default function LogInForm () {
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const disparch= useDispatch();

       const handleEmailChange = (event) => {
         setEmail(event.target.value);
       };

       const handlePasswordChange = (event) => {
         setPassword(event.target.value);
       };

       const handleSubmit = (event) => {
         event.preventDefault();
         disparch(loginUserThunk({ email, password }))
       };

  return (
    <form className={css.logInForm} onSubmit={handleSubmit}>
      <h2 className={css.title}>Вхід</h2>
      <div className={css.formGroup}>
        <label htmlFor="email" className={css.label}>
          Електронна пошта
        </label>
        <input
          type="email"
          id="email"
          className={css.input}
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className={css.formGroup}>
        <label htmlFor="password" className={css.label}>
          Пароль
        </label>
        <input
          type="password"
          id="password"
          className={css.input}
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit" className={css.button}>
        Увійти
      </button>
    </form>
  );
};
