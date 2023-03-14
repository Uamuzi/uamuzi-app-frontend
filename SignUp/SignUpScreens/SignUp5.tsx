import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import CustomSubtitle from "../../customStyles/CustomSubtitle";
import CustomTitle from "../../customStyles/CustomTitle";
import tw from "twrnc";
import CustomButton from "../../customStyles/CustomButton";

const SignUp5 = ({ navigation }: { navigation: any }) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNext = () => {
    navigation.navigate("LoginOne");
  };
  const handleBack = () => {
    navigation.goBack();
  };
  function handleClick() {
    throw new Error("Function not implemented.");
  }
  return (
    <View style={tw`bg-white`}>

        <Image style={tw` mr-32px ml-32px mt-150px h-280px w-350px`}
        source={require('../assets/success.png')}/>

        <CustomTitle>Congratulations</CustomTitle>
        <CustomSubtitle>Welcome to the Uamuzi family! You can now log in to your account</CustomSubtitle>

        <View style={tw`mt-20px`}>
            <CustomButton onPress={handleNext} text={"Login"} />
        </View>
    </View>
  );
};

export default SignUp5;
