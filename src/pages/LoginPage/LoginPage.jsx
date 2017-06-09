import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = (props) => {
  return (
    <div className='LoginPage'>
      <LoginForm
        {...props}
      />
    </div>
  );
};

export default LoginPage;