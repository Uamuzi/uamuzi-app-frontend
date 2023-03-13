import React, { useState,} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Pressable} from "react-native";
import tw from 'twrnc';
import CustomTitle from "../../customStyles/CustomTitle";
import CustomSubtitle from "../../customStyles/CustomSubtitle";
import OTPField from "../../customStyles/OTPField";
import CustomButton from "../../customStyles/CustomButton";


const ForgotPw2= ({navigation}:{navigation:any}) => {
    const [password, setPassword] = useState("");
    
    const [idNumber, setIDNumber] = useState("");

    const[show, setShow]= React.useState(false);
    const[visible, setVisible]= React.useState(true);

    const handleNext = () => {
        navigation.navigate('ForgotPw3');
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
            source={require('../assets/verify_code.png')}/>

            <CustomTitle>Verify Code</CustomTitle>

            <CustomSubtitle>Please enter the 4-digit code sent to 0712*****6</CustomSubtitle>

            <View style={tw`mt-40px mr-32px ml-32px`}>
                <OTPField
                onChange={function (value: string): void {
                    throw new Error("Function not implemented.");
                }}
                />
            </View> 

            <View style={tw`items-center flex flex-row justify-center mt-20px`}>
                 <Text style={tw`text-lg px-2px text-[#8067AD]`}>Resend code?</Text>
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
  
export default ForgotPw2;