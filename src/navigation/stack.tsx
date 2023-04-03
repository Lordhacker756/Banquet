import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {avatar} from '../assets/';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home, Details} from '../screens';
const Stack = createNativeStackNavigator();
import styles from './styles';
import {useSelector} from 'react-redux';
import Share from 'react-native-share';
import dynamicLinks from '@react-native-firebase/dynamic-links';

async function buildLink(dishName: string) {
  const link = await dynamicLinks().buildShortLink({
    link: `https://wobbleai.page.link/share?dish=${dishName}`,
    domainUriPrefix: 'https://wobbleai.page.link',
    android: {
      packageName: 'com.wobbleai',
    },
  });

  return link;
}

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

export default function HomeStack() {
  const DetailsHeader = () => {
    return (
      <View style={styles.detailHeader}>
        <TouchableOpacity
          style={styles.detailHeaderBtn}
          onPress={() => Linking.openURL('wobble://Home')}>
          <Ionicons name="chevron-back" size={25} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailHeaderBtn} onPress={handleShare}>
          <Ionicons name="share" size={25} color="gray" />
        </TouchableOpacity>
      </View>
    );
  };
  const dish = useSelector((state: any) => state.dish);

  const handleShare = async () => {
    const deepLink = await buildLink(dish.name);
    const shareOptions = {
      title: 'Share via',
      message: `Check out this dish🍽️, ${dish.name} \n${deepLink}`,
    };
    try {
      Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };
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
