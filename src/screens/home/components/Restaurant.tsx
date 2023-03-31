import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect} from 'react';
import styles from '../styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setDish} from '../../../redux/dishSlice';
import dynamicLinks from '@react-native-firebase/dynamic-links';

const Restaurant = ({index, restaurant}) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleDynamicLink = (link: any) => {
    // Handle dynamic link inside your own application
    if (link?.url) {
      const dish = link.url.split('/').pop();
      dispatch(setDish(dish));
      navigation.navigate('Details');
    }
  };

  useLayoutEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, []);

  useLayoutEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        if (link?.url) {
          // dispath the action to set the dish
          const dish = link.url.split('/').pop();
          dispatch(setDish(dish));
          navigation.navigate('Details');
        }
      });
  }, []);

  const handlePress = dishName => {
    dispatch(setDish(dishName));
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
