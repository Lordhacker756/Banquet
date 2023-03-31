import {View, Text, TextInput, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import restaurants from '../../constants/restaurant';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Restaurant from './components/Restaurant';
import Feather from 'react-native-vector-icons/Feather';

const ListHeader = () => {
  return (
    <View style={styles.listHeader}>
      <Text style={styles.listHeaderText}>What would you like to order?</Text>
      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="grey" />
        <TextInput
          style={styles.searchInput}
          placeholder="Want to..."
          placeholderTextColor="grey"
        />
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: responsiveHeight(5)}}
      style={styles.container}>
      {/* ListHeader */}
      <ListHeader />

      {/* List */}
      {restaurants.map((restaurant, index) => (
        <Restaurant key={index} index={index} restaurant={restaurant} />
      ))}
    </ScrollView>
  );
};

export default Home;
