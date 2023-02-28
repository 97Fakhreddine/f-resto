// @ts-nocheck
import React, { useState } from "react";

import { SvgXml } from "react-native-svg";
import OrderSvg from "./svg/Order Success";

import AuthModal from "./components/AuthModal";
import { Button, Text, View, ScrollView } from "@/ui";
import colors from '../../ui/theme/colors'
import BottomPopUp from "./components/BottomPopUp";


const AuthHome: React.FC = () => {
  let popUpRef: any = React.createRef();
  const [wichComponentToRender, setComponentToRender] = useState<
    "login" | "signup"
  >("login");
  const onShowPopUp = (componentName: "login" | "signup") => {
    setComponentToRender(componentName);
    popUpRef.show();
  };
  // const onClosePopUp = () => {
  //   popUpRef.close();
  // };

  const renderComponent: any = () => {
    return <AuthModal componentName={wichComponentToRender} />;
  };

  return (
    <ScrollView className="w-full h-screen">
      <View style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 20
      }}>
        <View className="flex items-center jusity-center mt-20" >
          <SvgXml xml={OrderSvg} width={230}></SvgXml>
        </View>
        <View className="mt-10">
          <Text
            className="font-Inter text-center font-semibold text-2xl leading-36"
            style={{
              color: colors.black[400]
            }}
          >
            Welcome
          </Text>
          <View className="flex-1 items-center justify-center w-256 mt-5">
            <Text
              className="flex-1 items-center justify-center text-center font-semibold leading-15 font-Inter w-full text-xs m-0"
              style={{
                color: colors.neutral[600],
              }}
            >
              Before enjoying Foodmedia services
            </Text>
            <Text
              className="flex-1 items-center justify-center text-center font-semibold leading-15 font-Inter w-full text-xs m-2"
              style={{
                color: colors.neutral[600]
              }}
            >
              Please register first
            </Text>
          </View>
        </View>
        <View className="mt-5">
          <View className="flex items-center align-center" >
            <Button
              label="Create Account"
              style={{
                width: 256,
                borderRadius: 1
              }}
              onPress={(e) => onShowPopUp("signup")}
            />
            <Button variant="secondary" style={{
              width: 256,

            }} label="Login" onPress={() => onShowPopUp("login")} />
            <Text
              className="flex items-center justify-center text-center font-semibold leading-15 font-Inter text-xs mt-10 mb-10"
            >
              By logging in or registering, you have agreed to
              <Text> </Text>
              <Text
                className="font-Inter text-xs font-semibold"
                style={{
                  color: colors.primary[400]
                }}
              >
                the Terms and Conditions
              </Text>
              <Text> </Text>
              <Text
                className="font-Inter text-xs font-semibold"
              >
                And
              </Text>
              <Text> </Text>
              <Text
                className="font-Inter text-xs font-semibold"
                style={{
                  color: colors.primary[400]
                }}
              >
                Privacy Policy
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <BottomPopUp
        ref={(target: any) => (popUpRef = target)}
        componentProps={renderComponent}
      ></BottomPopUp>
    </ScrollView>
  );
};

export default AuthHome;