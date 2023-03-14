import React, { useState,} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Pressable} from "react-native";
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import CustomSubtitle from "../../customStyles/CustomSubtitle";
import CustomTitle from "../../customStyles/CustomTitle";
import Input from "../../customStyles/CustomTextInput";
import CustomButton from "../../customStyles/CustomButton";


const SignUp1= ({navigation}:{navigation:any}) => {
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [idNumber, setIDNumber] = useState("");
   
    const[show, setShow]= React.useState(false);
    const[visible, setVisible]= React.useState(true);
    const[agree, setAgree]= React.useState(false);
    
    const handleNext = () => {
        navigation.navigate('SignUp2');
    };

    const navLogin = () => {
        navigation.navigate('LoginOne')
    }

    function handleClick() {
        throw new Error("Function not implemented.");
    }
  
    return (
        <View style={tw`bg-white mt-50px`}>
           
            <CustomTitle>Sign Up</CustomTitle>
            
            <CustomSubtitle>In just 3 easy steps</CustomSubtitle>
             
            <Image style={tw` mr-32px ml-32px mt-16px h-4px w-330px`}
            source={require('../assets/progress1.png')}/>
            
            <View style={tw`relative block ml-32px mr-32px border-b border-[#969696] mt-15px`}>
                <Image style={tw`pointer-events-none w-6 h-6 absolute mt-6 border-b border-[#969696]`}
                source={require('../assets/person.png')}
                />
                <Input placeholder={'First name'} value={firstName} onChangeText={(newValue)=> setFirstName(newValue)} /> 
            </View>    
                
            <View style={tw`relative ml-32px mr-32px  border-b border-[#969696]`}>
                <Image style={tw`pointer-events-none w-6 h-6 absolute mt-6 border-b border-[#969696]`}
                source={require('../assets/person.png')}
                />
                <Input placeholder={'Last name'} value={lastName} onChangeText={(newValue)=> setLastName(newValue)} 
                /> 
            </View>    
                
            <View style={tw`relative ml-32px mr-32px  border-b border-[#969696]`}>
                <Image style={tw`pointer-events-none w-6 h-6 absolute mt-6 border-b border-[#969696]`}
                source={require('../assets/id.png')}
                />
                <Input placeholder={'Uamuzi ID'} value={idNumber} onChangeText={(newValue)=> setIDNumber(newValue)} /> 
            </View>   
                
            <View style={tw`relative ml-32px mr-32px  border-b border-[#969696]`}>
            
                <AntDesign style={tw` w-6 h-6 absolute top-1/2 transform`}
                name="lock1" size={25} color="#969696" />
                <TextInput style={tw`text-sm text-[#969696] ml-32px mr-32px mt-26px pb-10px`} keyboardAppearance="dark"
                placeholder={'Password'} value={password} 
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
                <AntDesign style={tw`absolute top-1/2 transform`}
                name="lock1" size={25} color="#969696" />

                <TextInput style={tw`text-sm text-[#969696] ml-32px mr-32px mt-26px pb-10px`} keyboardAppearance="dark"
                placeholder={'Confirm password'} value={confirmPassword} 
                onChangeText={(newValue)=> setConfirmPassword(newValue)}
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
                <MaterialCommunityIcons
                name={show === false? 'eye-outline' : 'eye-off-outline'}
                size={26}
                color={'#969696'}
                />
                </TouchableOpacity>
            </View> 

            <View style={tw`mt-20px mr-32px ml-32px`}>
                <TouchableOpacity style={tw`relative block  top-1/2 transform`}
                onPress={
                    ()=>{
                        setAgree(!agree)   
                    }
                    }
                >   
                    <MaterialCommunityIcons 
                    name={agree === false? 'checkbox-outline' : 'checkbox-blank-outline'}
                    size={28}
                    color={'#969696'}
                    />
                </TouchableOpacity>
                <View style={tw`flex flex-row flex-wrap ml-41px`}>
                    <Text>By signing up, you agree to our</Text>
                    <Text style={tw`px-2px text-[#8067AD]`} onPress={() => console.log('Terms & Conditions')}>Terms & Conditions</Text>
                    <Text style={tw`px-2px`}>and our</Text>
                    <Text style={tw`px-2px text-[#8067AD]`} onPress={() => console.log('Privacy Policy')}>Privacy Policy</Text>
                </View>     
            </View>

            <View style={tw`mt-20px`}>
                <Pressable>
                      <CustomButton onPress={handleNext} text={"I agree"} /> 
                </Pressable> 
            </View>
            <View>
            <View style={tw`items-center flex flex-row justify-center mt-20px`}>
                <Text style={tw`text-lg`}>Already have an account?</Text>
                <Text style={tw`text-lg px-2px text-[#8067AD]`} onPress={navLogin}>Log in</Text>
                <Text></Text>
            </View>
            </View>
        </View>
    );
};
export default SignUp1;



