import React, { useState,} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Pressable} from "react-native";
import tw from 'twrnc';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import CustomTitle from "../../customStyles/CustomTitle";
import CustomSubtitle from "../../customStyles/CustomSubtitle";
import Input from "../../customStyles/CustomTextInput";
import CustomButton from "../../customStyles/CustomButton";


const ForgotPw3= ({navigation}:{navigation:any}) => {
    const [password, setPassword] = useState("");
    
    const [idNumber, setIDNumber] = useState("");

    const[show, setShow]= React.useState(false);
    const[visible, setVisible]= React.useState(true);

    const handleNext = () => {
        navigation.navigate('SignUp2');
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
            source={require('../assets/reset_pw.png')}/>

            <CustomTitle>Reset Password</CustomTitle>

            <CustomSubtitle>Your password should be atleast 8 characters long</CustomSubtitle>  

            <View style={tw`relative ml-32px mr-32px  border-b border-[#969696]`}>

                {/* <AntDesign style={tw` w-6 h-6 absolute top-1/2 transform`}
                name="lock1" size={25} color="#969696" /> */}
                <Image style={tw`pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 border-[#969696]`}
                source={require('../assets/lock.png')}
                />
                <TextInput style={tw`text-sm text-[#969696] ml-32px mr-32px mt-26px pb-10px`} keyboardAppearance="dark"
                placeholder={'New Password'} value={password} 
                onChangeText={(newValue)=> setPassword(newValue)}
                secureTextEntry={visible}
                /> 
                <TouchableOpacity style={tw`ml-303px absolute top-1/2 transform`}
                onPress={
                    ()=>{
                        setVisible(!visible)
                        setShow(!show)
                    }
                    }
                >   
                <MaterialCommunityIcons style={tw`w-20 h-20`}
                name={show === false? 'eye-outline' : 'eye-off-outline'}
                size={26}
                color={'#969696'}
                />
                </TouchableOpacity>  
            </View>  

            <View style={tw`relative ml-32px mr-32px  border-b border-[#969696]`}>

                {/* <AntDesign style={tw` w-6 h-6 absolute top-1/2 transform`}
                name="lock1" size={25} color="#969696" /> */}
                <Image style={tw`pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 border-[#969696]`}
                source={require('../assets/lock.png')}
                />
                <TextInput style={tw`text-sm text-[#969696] ml-32px mr-32px mt-26px pb-10px`} keyboardAppearance="dark"
                placeholder={'Confirm new Password'} value={password} 
                onChangeText={(newValue)=> setPassword(newValue)}
                secureTextEntry={visible}
                /> 
                <TouchableOpacity style={tw`ml-303px absolute top-1/2 transform`}
                onPress={
                    ()=>{
                        setVisible(!visible)
                        setShow(!show)
                    }
                    }
                >   
                <MaterialCommunityIcons style={tw`w-20 h-20`}
                name={show === false? 'eye-outline' : 'eye-off-outline'}
                size={26}
                color={'#969696'}
                />
                </TouchableOpacity>  
            </View> 

            <View style={tw`mt-20px`}>
                <Pressable>
                      <CustomButton onPress={handleNext} text={"Submit"} /> 
                </Pressable> 
            </View>
            <View>
            {/* <View style={tw`items-center flex flex-row justify-center mt-20px`}>
                <Text style={tw`text-lg`}>Don't have an account?</Text>
                <Text style={tw`text-lg px-2px text-[#8067AD]`} onPress={() => console.log('Sign up')}>Sign Up</Text>
                <Text></Text>
            </View> */}
            </View>
        </View>
    );
};
  
export default ForgotPw3;