import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button, colors, ControlledInput, HEIGHT, ScrollView, View } from '@/ui';

const schema = z.object({
  name: z
    .string({
      required_error: 'Full Name is required',
    })
    .email('Invalid email format'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

type Props = {
  onSubmit?: (data: FormType) => void;
};

const SignUp = ({ onSubmit = () => {
  // dispatch signup action
} }: Props) => {
  const { handleSubmit, control, formState } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const isValidForm = () => {
    return formState.isDirty
  }

  return (

    <View className="flex-1 justify-center p-4 w-full h-full" style={{
      backgroundColor: colors.white,
    }}>
      <ControlledInput
        testID="name-input"
        control={control}
        name="name"
        label="Full Name"
        placeholder='Enter your full name'
      />
      <ControlledInput
        testID="email-input"
        control={control}
        name="email"
        label="Email"
        placeholder='Eg namaemail@email.com'
      />
      <ControlledInput
        testID="password-input"
        control={control}
        name="password"
        label="Password"
        secureTextEntry={true}
        placeholder='**** **** ****'
      />
      <Button
        testID="login-button"
        label="Login"
        onPress={handleSubmit(onSubmit)}
        variant={!isValidForm() ? 'secondary' : 'primary'}
      />
    </View>
  );
};

export default SignUp