import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  heroImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(35),
    resizeMode: 'cover',
  },
  heroGradient: {
    width: responsiveWidth(100),
    height: responsiveHeight(35),
  },
  infoContainer: {
    position: 'absolute',
    top: responsiveHeight(30),
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    transform: [{ translateY: 0 }],
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: 'black'
  },
  dishRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EACE09',
    borderRadius: 10,
    width: responsiveWidth(15),
    height: responsiveHeight(3.5),
    fontSize: responsiveFontSize(1.5),
  },
  dishRatingText: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  stat: {
    flexDirection: 'row',
    width: responsiveWidth(22),
    height: responsiveHeight(4),
    backgroundColor: "lightgrey",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statText: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  ingredients: {
    marginTop: 30,
  },
  ingredientsTitle: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: 'black',
  },
  ingredientsList: {
    marginTop: 20,
  },
  ingredient: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginBottom: 20,
  },
  ingredientText: {
    fontSize: responsiveFontSize(2),
    color: 'grey',
    fontWeight: 'bold',
  },
  ingredientIcon: {
    width: responsiveWidth(5),
    height: responsiveHeight(3),
    resizeMode: 'contain',
  },
  orderButton: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    flexDirection: 'row',
    height: responsiveHeight(8),
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderButtonText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: 'white',
  },
  orderButtonTime: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: '#EACE09',
    marginLeft: 10,
  },
});
