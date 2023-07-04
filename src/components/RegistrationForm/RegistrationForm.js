import React, { useState } from 'react';
import css from './RegistrationForm.module.css'; 
import { useDispatch } from 'react-redux';
import { registerUserThunk } from '../../redux/thunks';

function FormRegistration() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 

        dispatch(registerUserThunk({ name, email, password }));

        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <form className={css.registration_form} onSubmit={handleSubmit}>
            <div className={css.form_group}>
                <label htmlFor="name" className={css.form_label}>Ім'я:</label>
                <input
                    type="text"
                    id="name"
                    className={css.form_control}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className={css.form_group}>
                <label htmlFor="email" className={css.form_label}>Електронна пошта:</label>
                <input
                    type="email"
                    id="email"
                    className={css.form_control}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className={css.form_group}>
                <label htmlFor="password" className={css.form_label}>Пароль:</label>
                <input
                    type="password"
                    id="password"
                    className={css.form_control}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className={`${css.btn} ${css.btn_primary}`}>Зареєструватися</button>
        </form>
    );
}

export default FormRegistration;
