import React, { useState,} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Pressable} from "react-native";
import tw from 'twrnc';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import CustomTitle from "../../customStyles/CustomTitle";
import CustomSubtitle from "../../customStyles/CustomSubtitle";
import Input from "../../customStyles/CustomTextInput";
import CustomButton from "../../customStyles/CustomButton";


const ForgotPw1= ({navigation}:{navigation:any}) => {
    const [password, setPassword] = useState("");
    
    const [idNumber, setIDNumber] = useState("");

    const[show, setShow]= React.useState(false);
    const[visible, setVisible]= React.useState(true);

    const handleNext = () => {
        navigation.navigate('ForgotPw2');
    };

    const handleBack = () => {
        navigation.goBack();
      };

    function handleClick() {
        throw new Error("Function not implemented.");
    }

    return (
        <View style={tw`bg-white mt-50px`}>

        <TouchableOpacity
                style={tw` mt-50px ml-25px pb-42px`}
                onPress={handleBack}
            >
                <Image style={tw`w-8 h-8`} source={require("../assets/Vector.png")} />
        </TouchableOpacity>

            <Image style={tw` mr-32px ml-32px mt-16px h-200px w-330px`}
            source={require('../assets/forgot_pw.png')}/>

            <CustomTitle>Forgot password?</CustomTitle>

            <CustomSubtitle>Please enter the phone number or email associated with this account</CustomSubtitle>

            <View style={tw`relative ml-32px mr-32px  border-b border-[#969696]`}>

                <TextInput style={tw`text-sm text-[#969696] ml-32px mr-32px mt-26px pb-10px`} keyboardAppearance="dark"
                placeholder={'Uamuzi ID or Mobile number'} 
                value={idNumber} 
                onChangeText={(newValue)=> setIDNumber(newValue)} /> 
            </View>   

            <View style={tw`mt-20px`}>
                <Pressable>
                      <CustomButton onPress={handleNext} text={"Send"} /> 
                </Pressable> 
            </View>
            <View>
          
            </View>
        </View>
    );
};
  
export default ForgotPw1;