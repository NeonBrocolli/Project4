import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = (props) => {
  return (
    <div className='LoginPage'>
      <h2>SECRET HIDDEN TREASURE!</h2>
      <LoginForm
        {...props}
      />
    </div>
  );
};

export default LoginPage;