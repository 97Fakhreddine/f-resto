import React from 'react'
import { Text, View, WIDTH } from '@/ui';
import SafeFood from "../svg/Safe Food";
import { SvgXml } from "react-native-svg";

export const StepTwo = (props: any) => {

  return (
    <View className="flex-1 items-center justify-center h-screen">
      <View className="flex-1 items-center justify-center m-0">
        <SvgXml xml={SafeFood} width={230} />
      </View>
      <View className="flex-1 items-center justify-center m-0 bold mt-10">
        <Text
          className="font-Inter text-center bold text-2xl leading-36"
        >
          Select the Favorites Menu
        </Text>
        <Text
          className="m-2 text-lg text-center text-gray-600"
        >
          Now eat well, don't leave the house,You can
          choose your favorite food only with
          one click
        </Text>
      </View>
    </View>
  )
}