import {StyleSheet, Animated, View, Dimensions} from 'react-native';
import React from 'react';



import tw from "twrnc"
const {width} = Dimensions.get('screen');

interface PaginationProps {
  data: any[];
  scrollX: Animated.Value;
  index: number;
}

const Pagination = ({data, scrollX, index}: PaginationProps) => {
  return (
    <View style={tw`absolute bottom-45 flex flex-row w-full items-center justify-center`}>
      {data.map((_, idx: number) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.1],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#A0A09F', '#8067AD', '#A0A09F'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[tw`w-12px h-12px rounded-6 mx-3px bg-[#A0A09F]`, {width: dotWidth, backgroundColor},]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  dotActive: {
    backgroundColor: '#000',
  },
});

