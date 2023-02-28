import React from 'react';

import { useAuth } from '@/core';

import type { FormType } from './login-form';
import Success from './components/Success';
import ForgetPassword from './components/ForgetPassword';
// import { LoginForm } from './login-form';
// import AuthHome from './AuthHome';

export const Login = () => {
  const signIn = useAuth.use.signIn();

  const onSubmit = (data: FormType) => {
    console.log(data);
    signIn({ access: 'access-token', refresh: 'refresh-token' });
  };
  // return <Success
  //   message='Please check your email for create 
  // a new password'
  //   btnLabel='Back Email'
  // />;
  return <ForgetPassword />
};
