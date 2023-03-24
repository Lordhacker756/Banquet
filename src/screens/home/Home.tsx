import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  SectionList,
} from 'react-native';
import React from 'react';
import {avatar} from '../../assets';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import restaurants from '../../constants/restaurant';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Restaurant from './components/Restaurant';

const ListHeader = () => {
  return (
    <View style={styles.listHeader}>
      <Text style={styles.listHeaderText}>What would you like to order?</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Want to..." />
      </View>
      <View style={styles.foodCategory}>
        <Text style={[styles.categoryItems, true && {color: 'black'}]}>
          Main
        </Text>
        <Text style={styles.categoryItems}>Healthy Food</Text>
        <Text style={styles.categoryItems}>Fast Food</Text>
        <Text style={styles.categoryItems}>Drinks</Text>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: responsiveHeight(5)}}
      style={styles.container}>
      {/* Header ~ Can be moved to navigation too */}
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Image style={styles.avatar} source={avatar} />
          <Text style={styles.headerText}>Erikaasav</Text>
        </View>
        <View style={styles.headerIcons}>
          <Feather name="bell" size={24} color="gray" />
          <Ionicons name="ios-menu-outline" size={30} color="gray" />
        </View>
      </View>

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
