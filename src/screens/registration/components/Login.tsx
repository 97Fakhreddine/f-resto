import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button, colors, ControlledInput, Text, View } from '@/ui';
import { ScrollView } from 'react-native-gesture-handler';

const schema = z.object({
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

const Login = ({ onSubmit = () => { } }: Props) => {
  const { handleSubmit, control, formState } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const isValidForm = () => {
    return formState.isDirty
  }

  return (
    <ScrollView className='h-full w-full' style={{
      backgroundColor: colors.white,
    }}>
      <View className="flex-1 justify-center p-4 w-full" >
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
    </ScrollView>
  );
};
export default Login