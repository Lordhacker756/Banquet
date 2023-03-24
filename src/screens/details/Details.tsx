import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Details = () => {
  const dish = useSelector((state: any) => state.dish);
  console.log(dish);
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

export default Details;
