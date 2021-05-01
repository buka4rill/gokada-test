import React from 'react';
import { Text, Button } from 'react-native';
import { Center } from '../Center';

export const Home = ({ navigation }) => {
  return (
    <Center>
      <Text>Welcome to the home page</Text>
      <Text>Drag from left to right to reveal side drawer.</Text>
      <Button
        title="Go to Login Page"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </Center>
  );
};
