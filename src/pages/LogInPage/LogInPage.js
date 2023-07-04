import React from 'react';
import LogInForm from '../../components/LogInForm/LogInForm';
import { Container } from 'components/Container/Container';
import css from './LogInPage.module.css';

function LogInPage() {
  

  return (
    <Container style={css.container}>
      <div style={css.content}>
        <h1 style={css.heading}>Вітаємо на сторінці входу</h1>
        <p>Будь-ласка, увійдіть за допомогою Логіну та Паролю</p>
        <div style={css.formWrapper}>
          <LogInForm />
        </div>
      </div>
    </Container>
  );
}

export default LogInPage;