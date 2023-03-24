import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Details = () => {
  const dish = useSelector((state: any) => state.dish);
  console.log(dish);
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.heroImage} source={dish.image}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0)']}
          style={styles.heroGradient}></LinearGradient>
      </ImageBackground>

      {/* Info Container */}
      <View style={styles.infoContainer}>
        <View style={styles.infoHeader}>
          <Text style={styles.infoTitle}>{dish.name}</Text>
          <View style={styles.dishRating}>
            <Ionicon name="star" size={15} color="black" />
            <Text style={styles.dishRatingText}>{dish.rating}</Text>
          </View>
        </View>

        {/* Stats  */}
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Ionicon name="time-outline" size={20} color="grey" />
            <Text style={styles.statText}>{dish.cooking_time} min</Text>
          </View>
          <View style={styles.stat}>
            <MaterialCommunityIcons name="bike" size={20} color="grey" />
            <Text style={styles.statText}>{dish.delivery_time} min</Text>
          </View>
          <View style={styles.stat}>
            <Ionicon name="restaurant-outline" size={20} color="grey" />
            <Text style={styles.statText}>{dish.eating_time} min</Text>
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.ingredients}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          <View style={styles.ingredientsList}>
            {dish.ingredients.map((ingredient: any, index: number) => (
              <View style={styles.ingredient} key={index}>
                <MaterialCommunityIcons
                  name="circle"
                  size={10}
                  color="lightgrey"
                />
                <Text style={styles.ingredientText}>{ingredient}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Order Button */}
        <TouchableOpacity style={styles.orderButton} activeOpacity={0.8}>
          <Text style={styles.orderButtonText}>Get it Delivered in</Text>
          <Text style={styles.orderButtonTime}>{dish.delivery_time} min</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
