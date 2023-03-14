
import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

import CustomSubtitle from "../../customStyles/CustomSubtitle";
import CustomTitle from "../../customStyles/CustomTitle";
import tw from "twrnc";
import Input from "../../customStyles/CustomTextInput";
import CustomButton from "../../customStyles/CustomButton";

const SignUp4 = ({ navigation }: { navigation: any }) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNext = () => {
    navigation.navigate("SignUp5");
  };
  const handleBack = () => {
    navigation.goBack();
  };
  function handleClick() {
    throw new Error("Function not implemented.");
  }

  const data = [
    { label: 'Item 1', value: '1', search: 'Item 1' },
    { label: 'Item 2', value: '2', search: 'Item 2' },
    { label: 'Item 3', value: '3', search: 'Item 3' },
    { label: 'Item 4', value: '4', search: 'Item 4' },
    { label: 'Item 5', value: '5', search: 'Item 5' },
    { label: 'Item 6', value: '6', search: 'Item 6' },
    { label: 'Item 7', value: '7', search: 'Item 7' },
    { label: 'Item 8', value: '8', search: 'Item 8' },
  ];
  
    const [value, setValue] = useState<string>();
    const [isFocus, setIsFocus] = useState(false);
  
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

  return (
    <View style={tw`bg-white`}>
      <TouchableOpacity
        style={tw` mt-50px ml-25px pb-42px`}
        onPress={handleBack}
      >
        <Image style={tw`w-8 h-8`} source={require("../assets/back.png")} />
      </TouchableOpacity>

      <CustomTitle>Sign Up</CustomTitle>
      <CustomSubtitle>Last step. Select your domains</CustomSubtitle>
      <Image
        style={tw`ml-32px mt-16px h-4px w-325px`}
        source={require("../assets/progress3.png")}
      />
      
      <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        minHeight={100}
        labelField="label"
        valueField="value"
        searchField="search"
        placeholder={!isFocus ? 'Select your Country' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>

    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        minHeight={100}
        labelField="label"
        valueField="value"
        searchField="search"
        placeholder={!isFocus ? 'Select your County' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        
      />
    </View>

    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        minHeight={100}
        labelField="label"
        valueField="value"
        searchField="search"
        placeholder={!isFocus ? 'Select your Constituency' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        
      />
    </View>


    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        minHeight={100}
        labelField="label"
        valueField="value"
        searchField="search"
        placeholder={!isFocus ? 'Select your Ward' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        
      />
    </View>

    <View style={tw`mt-40px`}>
        <CustomButton onPress={handleNext} text={"Finish"} />
    </View>

    </View>
  );
};

export default SignUp4;

const styles = ({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
