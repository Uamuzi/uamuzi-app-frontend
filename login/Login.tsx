import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from '@react-navigation/native';
import LoginOne from "./screens/LoginOne";
import ForgotPw1 from "./screens/ForgotPw1";
import ForgotPw2 from "./screens/ForgotPw2";
import ForgotPw3 from "./screens/ForgotPw3";

const Stack = createStackNavigator();

const Login = ({navigation}:{navigation:any})=> {
    return (
        // <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginOne" component={LoginOne} options= { {headerShown: false}}/>
                <Stack.Screen name="ForgotPw1" component={ForgotPw1} options= { {headerShown: false}}/>
                <Stack.Screen name="ForgotPw2" component={ForgotPw2} options= { {headerShown: false}}/>
                <Stack.Screen name="ForgotPw3" component={ForgotPw3} options= { {headerShown: false}}/>
            </Stack.Navigator>
        // </NavigationContainer>
    );
};

export default Login;