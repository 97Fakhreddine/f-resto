import React from 'react'
import { Text, View } from '@/ui';
import OrderFood from "../svg/Order illustration";
import { SvgXml } from "react-native-svg";

export const StepThree = (props: any) => {

  return (
    <View className="flex-1 items-center justify-center h-screen">
      <View className="flex-1 items-center justify-center m-0">
        <SvgXml xml={OrderFood} width={230} />
      </View>
      <View className="flex-1 items-center justify-center m-0 h-100 bold">
        <Text
          className="font-Inter text-center bold text-2xl leading-36 mt-10"
        >
          Good food at a cheap price
        </Text>
        <Text
          className="mb-2 text-lg text-center text-gray-600"
        >
          You can eat at expensive restaurants with
          affordable price
        </Text>
      </View>
    </View>
  )
}