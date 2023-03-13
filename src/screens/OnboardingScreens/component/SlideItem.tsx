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
  uamuziLogo: any,
}

type SlideItemProps = {
  item: Item,
  index: number,
}

const SlideItem: React.FC<SlideItemProps> = ({item, index}) => {
  const isFirstItem = index === 0;
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
          {isFirstItem && item.uamuziLogo &&(<Image style={tw`w-93px h-34px ml-3px mt-[-3px]`}
          source={item.uamuziLogo}
          />)}
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

