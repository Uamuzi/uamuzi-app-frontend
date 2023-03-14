import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text, Keyboard } from "react-native";

import CustomSubtitle from "../../customStyles/CustomSubtitle";
import CustomTitle from "../../customStyles/CustomTitle";
import tw from "twrnc";

import CustomButton from "../../customStyles/CustomButton";
import OTPField from "../../customStyles/OTPField";

export type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
};

const SignUp3 = ({ navigation }: { navigation: any }) => {
  
  const handleNext = () => {
    navigation.navigate("SignUp4");
  };

  const handleBack = () => {
    navigation.goBack();
  };
  function handleClick() {
    throw new Error("Function not implemented.");
  }

  return (
    <View style={tw`bg-white`}>
      <TouchableOpacity
        style={tw`mt-50px ml-25px pb-42px`}
        onPress={handleBack}
      >
        <Image style={tw`w-8 h-8`} source={require("../assets/back.png")} />
      </TouchableOpacity>

      <CustomTitle>Sign Up</CustomTitle>

      <CustomSubtitle>
        Please enter the 4-digit code sent t0 0712*****6
      </CustomSubtitle>

      <Image
        style={tw` mr-32px ml-32px mt-16px h-4px w-325px`}
        source={require("../assets/progress2.png")}
      />

      <View style={tw`mt-40px mr-32px ml-32px`}>
        <OTPField
          onChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </View>

      <TouchableOpacity style={tw`justify-center items-center`}>
        <Text style={tw`text-lg underline text-[#8067AD] mt-40px pb-40px`}>
          Resend Code
        </Text>
      </TouchableOpacity>

      <CustomButton onPress={handleNext} text={"Verify Code"} />
    </View>
  );
};

export default SignUp3;
