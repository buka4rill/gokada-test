import React from 'react';
import { Text, Button } from 'react-native';
import { Center } from '../Center';

export const Login = ({ navigation }) => {
  return (
    <Center>
      <Text>Login screen</Text>
      <Button
        title="Go to Register Screen"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </Center>
  );
};
