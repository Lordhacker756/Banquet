import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setDish} from '../../../redux/dishSlice';

const Restaurant = ({index, restaurant}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePress = (dish: string) => {
    dispatch(setDish(dish));
    navigation.navigate('Details');
  };

  return (
    <View key={index} style={styles.listContainer}>
      <Text style={styles.listTitle}>{restaurant.name}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.listItems}>
        {restaurant.dishes.map((dish, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              style={styles.listItem}
              onPress={() => {
                handlePress(dish.name);
              }}>
              <Image source={dish.image} style={styles.listItemImage} />
              <Text style={styles.listItemText}>{dish.name}</Text>
              <Text style={styles.discount}>
                Today's Discount: {dish.discount}%
              </Text>
              <Text style={styles.price}>Rs. {dish.price}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Restaurant;
