import React from 'react'
import { Text, View } from '@/ui';
import TrackingAndMapSvg from "../svg/Tracking & Maps";
import { SvgXml } from "react-native-svg";

export const StepOne = (props: any) => {

  return (
    <View className="flex-1 items-center justify-center h-screen">
      <View className="flex-1 items-center justify-center m-0">
        <SvgXml xml={TrackingAndMapSvg} width={230} />
      </View>
      <View className="flex-1 items-center justify-center m-0 bold mt-10">
        <Text
          className="font-Inter text-center bold text-2xl leading-36"
        >
          Nearby restaurants
        </Text>
        <Text
          className="mb-2 text-lg text-center text-gray-600"
        >
          You don't have to go far to find a good restaurant, we have provided
          all the restaurants that is near you
        </Text>
      </View>
    </View>
  )
}