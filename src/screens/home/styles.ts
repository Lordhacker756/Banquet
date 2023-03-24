import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(3)
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 10
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15
  },
  headerText: {
    fontSize: responsiveFontSize(2),
    color: 'black',
    fontWeight: 'bold'
  },
  avatar: {
    height: responsiveWidth(11),
    width: responsiveWidth(11),
    borderRadius: 100,
  },

  listHeader: {
    rowGap: 14,
    marginVertical: responsiveHeight(1)
  },
  listHeaderText: {
    fontSize: responsiveFontSize(4),
    color: 'black',
    fontWeight: 'bold',
    width: responsiveWidth(70),
  },
  searchContainer: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    paddingHorizontal: responsiveWidth(3),
  },
  searchInput: {
    fontSize: responsiveFontSize(2),
    color: 'gray',
  },
  foodCategory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(1),
    marginVertical: responsiveHeight(2),
  },
  categoryItems: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
    color: 'grey'
  },
  listContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: responsiveHeight(1),
  },
  listTitle: {
    fontSize: responsiveFontSize(2.5),
    color: 'black',
    fontWeight: 'bold',
    marginBottom: responsiveHeight(1),
  },
  listItems: {
    flexDirection: 'row',
    marginVertical: responsiveHeight(1),
  },
  listItem: {
    marginRight: responsiveWidth(3),
  },
  listItemImage: {
    height: responsiveWidth(45),
    width: responsiveWidth(45),
    borderRadius: 10,
  },
  listItemText: {
    fontSize: responsiveFontSize(2.2),
    color: 'black',
    fontWeight: 'bold',
    marginTop: responsiveHeight(1),
  },
  discount: {
    color: 'green',
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  price: {
    color: 'grey',
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
});
