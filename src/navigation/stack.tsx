import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {avatar} from '../assets/';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home, Details} from '../screens';
const Stack = createNativeStackNavigator();
import styles from './styles';

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Image style={styles.avatar} source={avatar} />
        <Text style={styles.headerText}>Hi, Utkarsh👋</Text>
      </View>
      <View style={styles.headerIcons}>
        <Feather name="bell" size={24} color="gray" />
        <Ionicons name="ios-menu-outline" size={30} color="gray" />
      </View>
    </View>
  );
};

const DetailsHeader = ({navigation}) => {
  return (
    <View style={styles.detailHeader}>
      <TouchableOpacity
        style={styles.detailHeaderBtn}
        onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={25} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.detailHeaderBtn}>
        <Ionicons name="share" size={25} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <HomeHeader />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({navigation}) => ({
          header: () => <DetailsHeader navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}
