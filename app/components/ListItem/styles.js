import { StyleSheet } from 'react-native';

const colors = {
  backgroundgrey: '#bec6e9',
  white: '#FFFFFF',
  lightGray: '#F0F0F0',
  border: '#E2E2E2',
  inputText: '#797979',
  darkText: '#343434'
}

export default StyleSheet.create({
  row: {
    paddingVertical: 15,
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  nameView: {
    paddingHorizontal: 20,
    paddingVertical:   10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1
  },
  priceView: {
    paddingHorizontal: 10,
    paddingVertical:   10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1
  },
  name: {
    color: colors.darkText,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  dimensions: {
    color: colors.darkText,
    fontSize: 13,
    justifyContent: 'center'
  },
  price: {
    color: colors.darkText,
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20
  }
  });
