import React, { useState,} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Pressable} from "react-native";
import tw from 'twrnc';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import CustomTitle from "../../customStyles/CustomTitle";
import Input from "../../customStyles/CustomTextInput";
import CustomButton from "../../customStyles/CustomButton";
import { useValidation } from 'react-native-form-validator';


const LoginOne= ({navigation}:{navigation:any}) => {
    const [password, setPassword] = useState("");
    
    const [idNumber, setIDNumber] = useState("");

    const[show, setShow]= React.useState(false);
    const[visible, setVisible]= React.useState(true);

    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({ 
        state: {password, idNumber}
    })

    const handleNext = () => {
        navigation.navigate('ForgotPw1');
    };

    const navSignup = () =>{
        navigation.navigate('SignUp1')
    }

    const handleSubmit = () => {

        validate ({
            name: {required: true},
            password: {required: true}
        })

        const data = {
            password, idNumber
        };

        console.log(data)
    }

    return (
        <View style={tw`bg-white mt-50px`}>

            <Image style={tw` mr-32px ml-32px mt-16px h-250px w-350px`}
            source={require('../assets/login.png')}/>

            <CustomTitle>Karib<Text style={tw`text-4xl font-bold w-100 text-[#8067AD]`}>u</Text>!</CustomTitle>


            <View style={tw`ml-32px mr-32px  border-b border-[#969696]`}>
                <Image style={tw`w-6 h-6  mt-22px absolute border-[#969696]`}
                source={require('../assets/at.png')}
                />
                <TextInput style={tw`text-sm text-[#969696] ml-32px mr-32px mt-26px pb-10px`} keyboardAppearance="dark"
                 placeholder={'Uamuzi ID or Mobile number'} value={idNumber} onChangeText={(newValue)=> setIDNumber(newValue)} /> 
            </View>   

            <View style={tw`ml-32px mr-32px  border-b border-[#969696]`}>

                <Image style={tw`  w-6 h-8 mt-20px absolute border-[#969696]`}
                source={require('../assets/lock.png')}
                />
                <TextInput style={tw`text-sm text-[#969696] ml-32px mr-32px mt-26px pb-10px`} keyboardAppearance="dark"
                placeholder={'Password'} value={password} 
                onChangeText={(newValue)=> setPassword(newValue)}
                secureTextEntry={visible}
                /> 
                {isFieldInError('date') &&
        getErrorsInField('date').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}
                <TouchableOpacity style={tw`ml-303px absolute mt-6 `}
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

            <View style={tw`items-center flex flex-row justify-center mt-20px`}>
                <Text style={tw`text-lg text-[#8067AD]`} onPress={handleNext}>Forgot password?</Text> 
            </View>

            

            <View style={tw`mt-20px`}>
                <Pressable>
                      <CustomButton onPress={handleSubmit} text={"Login"} /> 
                </Pressable> 
            </View>
            <View>
            <View style={tw`items-center flex flex-row justify-center mt-20px`}>
                <Text style={tw`text-lg`}>Don't have an account?</Text>
                <Text style={tw`text-lg px-2px text-[#8067AD]`} onPress={navSignup}>Sign Up</Text>
                <Text></Text>
            </View>
            </View>
        </View>
    );
};
  
export default LoginOne;