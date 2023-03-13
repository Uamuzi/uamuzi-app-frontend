import React from "react";
import { TextInputProps, View, Image, TextInput, Pressable, Keyboard } from "react-native";

import tw from 'twrnc';
interface InputProps extends TextInputProps {
    placeholder: string;

  }

  const Input: React.FC<InputProps> = ({ placeholder}) => (
    <Pressable style={tw`ml-32px mr-32px `} onPress={Keyboard.dismiss}>
      <TextInput style={tw`text-sm text-[#969696]  mt-26px pb-10px`}
      keyboardAppearance="dark" placeholder={placeholder} 
      />
    </Pressable>
  );
  export default Input;