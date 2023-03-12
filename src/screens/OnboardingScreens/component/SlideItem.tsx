import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import tw from "twrnc"

const {width, height} = Dimensions.get('screen');

type Item = {
  img: any,
  title: string,
  subTitle: string,
}

type SlideItemProps = {
  item: Item,
}

const SlideItem: React.FC<SlideItemProps> = ({item}) => {
  
  return (
    <View style={styles.container}>
      <Image
        source={item.img}
        resizeMode="contain"
        style={[
          tw`w-full flex-0.5`,
        ]}
      />
      <View style={tw`flex-0.4 items-center`}>
        <View style={tw`flex-row`}>
          <Text style={tw`text-2xl font-bold text-[#333333] text-center`}>{item.title}</Text>
        </View>
        <Text style={tw`text-lg my-12px text-gray-700 text-center`}>{item.subTitle}</Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
  },
});

