import React from 'react'
import { Button, colors, Pressable, Text, View } from "@/ui"
import { SvgXml } from "react-native-svg"
import SuccessSvg from '../svg/success';
import { GestureResponderEvent } from 'react-native';

type Props = {
  btnLabel: string
  message: string
  isEmail: boolean
  onPressInnerTitle: (event: GestureResponderEvent) => void
  onPressBtn: (event: GestureResponderEvent) => void
};

const Success = ({ btnLabel = 'back', message = 'please type text', isEmail = false, onPressInnerTitle, onPressBtn }: Props) => {
  return (
    <View className="flex p-10 flex-col w-screen h-screen" style={{
      display: 'flex',
      justifyContent: 'space-around'
    }}>
      <View className="flex jusity-center self-auto">
        <View className="w-full flex items-center">
          <SvgXml xml={SuccessSvg}></SvgXml>
        </View>
        <View className="flex justify-center w-full">
          <Text className="text-3xl font-semibold text-center font-inter">Success</Text>
          <Text className="text-center mt-5 font-intert"
            style={{
              color: colors.neutral[600]
            }}
          >{message}</Text>
          {
            isEmail ? <Pressable onPress={(e) => onPressInnerTitle(e)}><Text className="text-center mt-5 font-intert mt-20 font-bold"
              style={{
                color: colors.neutral[600]
              }}
            >Can't get email? <Text className="font-bold" style={{
              color: colors.primary[400]
            }}>Resubmit</Text></Text></Pressable>
              : null}
        </View>
      </View>
      <View>
        <Button onPress={(e) => onPressBtn(e)} label={btnLabel}></Button>
      </View>
    </View>
  )
}

export default Success