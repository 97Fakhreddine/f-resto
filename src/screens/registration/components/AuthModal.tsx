import React, { useEffect, useState } from "react";
import uuid from "react-native-uuid";


import {
  Dimensions,
  StyleSheet,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { HEIGHT, ScrollView, TouchableOpacity, Text, View, WIDTH } from "@/ui";
import Login from "./Login";
import SignUp from "./SignUp";
import colors from "@/ui/theme/colors";


const FirstRoute = () => (
  <ScrollView className="w-full h-full" style={[{ backgroundColor: colors.white }]}><SignUp
  /></ScrollView>
);
const SecondRoute = () => (
  <ScrollView className="w-full h-full" style={[{ backgroundColor: colors.white }]}><Login /></ScrollView>
);


const AuthModal = (props: { componentName: string }) => {
  const deviceWidth = WIDTH;
  const { componentName } = props;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Create Account" },
    { key: "second", title: "Login" },
  ]);

  useEffect(() => {
    if (componentName === "login") {
      setIndex(1);
    } else {
      setIndex(0);
    }
  }, [componentName]);


  const renderTabView = () => (
    <TabView
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      initialLayout={{ width: Dimensions.get('window').width }}
      style={styles.tabView}
      renderTabBar={renderTabBar}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (props: {
    navigationState: { routes: any[] };
    position: {
      interpolate: (arg0: { inputRange: any; outputRange: any }) => any;
    };


  }) => {
    return (

      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setIndex(i)}
              style={
                styles.tabItem
              }
            >
              <View
                className="flex items-center justify-items-stretch mt-5 w-auto"
                style={{
                  maxWidth: deviceWidth,
                }}
              >
                <Text
                  className="text-xl font-Inter font-bold transition-all"
                  style={{
                    color: i === index ? colors.primary[400] : colors.neutral[400],
                  }}
                >
                  {route.title}
                </Text>
                <View
                  className="transition-all"
                  style={{
                    backgroundColor: i === index ? colors.primary[400] : "none",
                    width: 77,
                    height: 2,
                    borderRadius: 12,
                    marginTop: 5,
                    display: i === index ? "flex" : "none",
                  }}
                ></View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View
      className="flex justify-center align-center w-full rounded-t-3xl h-full"
      style={{ height: HEIGHT, position: 'relative' }}
    >
      <View
        style={{
          marginHorizontal: 20,
          width: 48,
          height: 6,
          backgroundColor: "#D2D4D8",
          marginLeft: "45%",
          borderRadius: 12,
          top: 20,
          zIndex: 2

        }}
      ></View>
      {renderTabView()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
    zIndex: 2
  },
  tabView: {
    flex: 1,
    height: HEIGHT,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
  },
  tabBar: {
    flexDirection: 'row',
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    backgroundColor: colors.white,
  },
});
export default AuthModal;