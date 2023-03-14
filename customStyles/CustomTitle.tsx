  
import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

import tw from 'twrnc';

export default function CustomTitle(props:any) {
  return (
    <Text style={tw`text-[#333333] text-4xl font-bold mr-10px ml-20px`}>
      {props.children}
    </Text>
  );
}
