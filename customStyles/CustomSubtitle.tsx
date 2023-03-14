import React from 'react';
import {
  Text,
} from 'react-native';

import tw from 'twrnc';

export default function CustomSubtitle(props:any) {
  return (
    <Text style={tw`text-[#969696] text-sm mr-10px ml-20px pt-16px`}>
      {props.children}
    </Text>
  );
}