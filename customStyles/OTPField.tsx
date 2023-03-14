import React, { useRef, useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';
import tw from 'twrnc';

interface OTPFieldProps {
  onChange: (value: string) => void;
}

const OTPField: React.FC<OTPFieldProps> = ({ onChange }) => {
  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);
  const input3Ref = useRef<TextInput>(null);
  const input4Ref = useRef<TextInput>(null);

  const inputs = [input1Ref, input2Ref, input3Ref, input4Ref];

  const handleKeyPress = (index: number, event: any) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      inputs[index - 1]?.current?.focus();
    } else if (event.nativeEvent.key !== 'Backspace' && index < inputs.length - 1) {
      inputs[index + 1]?.current?.focus();
    }
  };

  const handleChange = (index: number, value: string) => {
    onChange(value);
    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1]?.current?.focus();
    }
  };

  useEffect(() => {
    input1Ref.current?.focus();
  }, []);

  return (
    <View style={tw`flex flex-row justify-between w-full`}>
      {inputs.map((inputRef, index) => (
        <View key={index} style={tw`flex-1 ${index < inputs.length - 1 ? 'mr-16px' : ''}`}>
          <TextInput
            style={tw`text-center text-2xl border-b-4 border-[#8067AD] pb-3px`}
            onChangeText={(value) => handleChange(index, value)}
            keyboardType="numeric"
            maxLength={1}
            ref={inputRef}
            onKeyPress={(event) => handleKeyPress(index, event)}
          />
        </View>
      ))}
    </View>
  );
};

export default OTPField;

