import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp1 from "../SignUpScreens/SignUp1";
import SignUp2 from "../SignUpScreens/SignUp2";
import SignUp3 from "../SignUpScreens/SignUp3";

const Stack = createStackNavigator();

const SignUp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignUp1" component={SignUp1} />
      <Stack.Screen name="SignUp2" component={SignUp2} />
      <Stack.Screen name="SignUp3" component={SignUp3} />
    </Stack.Navigator>
  );
};
export default SignUp;
