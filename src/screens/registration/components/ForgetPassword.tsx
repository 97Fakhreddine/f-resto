import React from "react"
import { Button, colors, ControlledInput, Pressable, Text, View } from "@/ui"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GestureResponderEvent } from "react-native";


const schema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
});
type FormType = z.infer<typeof schema>;
type OnSubmit = (data: FormType) => void;

const ForgetPassword = () => {
  const { handleSubmit, control, formState } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const isValidForm = () => {
    return formState.isDirty
  }

  const onSubmit: OnSubmit = (data) => {
    console.log(data)
  }

  const redirectToSignIn = (e: GestureResponderEvent) => {
    // TODO: Redicrect the user to sign in page
    console.log(e)
  }
  return (
    <View className="flex p-5 flex-col w-screen h-screen" style={{
      display: 'flex',
      justifyContent: 'space-around'
    }}>
      <View>
        <Text className="text-2xl font-bold text-start font-inter">Forget Password</Text>
        <Text className="text-sm font-medium text-start font-inter mt-2" style={{
          color: colors.neutral[500]
        }}>Enter your registered email below</Text>
        <View className="mt-10">
          <ControlledInput
            testID="email-input"
            control={control}
            name="email"
            label="Email"
            placeholder='Eg namaemail@email.com'
          />
          <Pressable onPress={(e) => redirectToSignIn(e)}>
            <Text className="text-sm font-medium text-start font-inter ml-2" style={{ color: colors.neutral[400] }}>
              Remember the password? 
              <Text style={{ color: colors.primary[400] }}> Sign in</Text>
            </Text>
          </Pressable>
        </View>
      </View>
      <View >
        <Button
          testID="submit-button"
          label="Submit"
          onPress={handleSubmit(onSubmit)}
          variant={!isValidForm() ? 'secondary' : 'primary'}
        />
      </View>
    </View>
  )
}

export default ForgetPassword