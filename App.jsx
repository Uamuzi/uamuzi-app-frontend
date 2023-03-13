import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import tw from "twrnc"
import { default as OnboardingScreen } from './src/screens/OnboardingScreens/component/OnboardingScreen.tsx';


export default function App() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-[#fff]`}>
      <StatusBar style="auto" />
     
        <OnboardingScreen />
      
    </View>
  );
}


