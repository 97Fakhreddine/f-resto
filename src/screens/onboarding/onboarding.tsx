import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useIsFirstTime } from '@/core/hooks';
import { ArrowRight, Pressable, Text, View, WIDTH } from '@/ui';
import { StepOne } from './components/stepOne';
import { StepThree } from './components/stepThree';
import { StepTwo } from './components/stepTwo';

import colors from '../../ui/theme/colors'

export const Onboarding = () => {
  // TODO: disable this rule for vars with underscore
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [_, setIsFirstTime] = useIsFirstTime();

  const [currentStep, setCurrentStep] = useState(0);
  const displayBubbles = () => {
    const maxBubble = [0, 1, 2];
    return maxBubble.map((e, i) => {
      return (
        <Pressable
          onPress={() => setCurrentStep(i)}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
          key={i}
        >
          <View key={i} style={
            currentStep === i ? styles.active : styles.inactive}></View>
        </Pressable >
      );
    });
  };


  const displayArrow = () => {
    const newStep = currentStep + 1;
    let isDisable = false;

    if (newStep > 3) {
      isDisable = true;
    }

    return (
      <Pressable style={{
        width: 30
      }} onPress={() => {
        // showMessage({
        //   message: 'clicked',
        //   type: 'success',
        // })
        setCurrentStep(newStep)
      }}><ArrowRight color={colors.primary[400]} disabled={!isDisable} /></Pressable>
    );
  };



  return (
    <View className="flex h-full items-center justify-center bg-white w-full"

    >
      <View className='justify-start' style={{
        maxHeight: 350,
        position: 'relative'
      }}>
        {currentStep === 0 ? <StepOne /> : null}
        {currentStep === 1 ? <StepTwo /> : null}
        {currentStep === 2 ? <StepThree /> : null}
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 30,
          width: '100%',
        }}
      >
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
          paddingLeft: 40,
          paddingRight: 40,
          height: 50
        }}>
          <Text className="text-center" >Skip</Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              flexDirection: 'row',
            }}
          >
            {displayBubbles()}
          </View>
          {displayArrow()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  active: {
    marginLeft: 5,
    marginRight: 5,
    width: 10,
    height: 10,
    backgroundColor: colors.primary[400],
    borderRadius: 50,
  },
  inactive: {
    marginLeft: 5,
    marginRight: 5,
    width: 10,
    height: 10,
    backgroundColor: colors.grey,
    borderRadius: 50,
  },
});

