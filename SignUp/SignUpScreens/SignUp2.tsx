import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import CustomSubtitle from "../../customStyles/CustomSubtitle";
import CustomTitle from "../../customStyles/CustomTitle";
import tw from "twrnc";
import Input from "../../customStyles/CustomTextInput";
import CustomButton from "../../customStyles/CustomButton";

const SignUp2 = ({ navigation }: { navigation: any }) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNext = () => {
    navigation.navigate("SignUp3");
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
        style={tw` mt-50px ml-25px pb-42px`}
        onPress={handleBack}
      >
        <Image style={tw`w-8 h-8`} source={require("../assets/back.png")} />
      </TouchableOpacity>

      <CustomTitle>Sign Up</CustomTitle>
      <CustomSubtitle>Almost there! Let's verify your details</CustomSubtitle>
      <Image
        style={tw`ml-32px mt-16px h-4px w-325px`}
        source={require("../assets/progress2.png")}
      />

      <View
        style={tw`relative block ml-32px mr-32px  border-b border-[#969696] mt-20px`}
      >
        <Image
          style={tw`  w-6 h-6 absolute mt-6 border-b border-[#969696]`}
          source={require("../assets/id.png")}
        />
        <Input
          placeholder={"Email address"}
          value={emailAddress}
          onChangeText={(newValue) => setEmailAddress(newValue)}
        />
      </View>

      <View
        style={tw`relative block ml-32px mr-32px  border-b border-[#969696]`}
      >
        <Image
          style={tw`  w-6 h-6 absolute mt-6 `}
          source={require("../assets/phone.png")}
        />
        <Input
          placeholder={"Mobile number"}
          value={phoneNumber}
          onChangeText={(newValue) => setPhoneNumber(newValue)}
        />
      </View>
      <View style={tw`mt-40px`}>
        <CustomButton onPress={handleNext} text={"Send"} />
      </View>
    </View>
  );
};

export default SignUp2;
