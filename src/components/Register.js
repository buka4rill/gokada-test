import React from 'react';
import { Text, Button } from 'react-native';
import { Center } from '../Center';

export const Register = ({ navigation }) => {
  return (
    <Center>
      <Text>Register screen</Text>
      <Button
        title="Go to Login Screen"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </Center>
  );
};
