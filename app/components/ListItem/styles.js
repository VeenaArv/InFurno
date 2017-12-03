import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $underlayColor: '$border',
  row: {
    paddingVertical: 15,
    flexDirection: 'row',
    paddingHorizontal: 5,
    backgroundColor: '$white'
  },
  nameView: {
    paddingHorizontal: 20,
    paddingVertical:   10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '$white'
  },
  priceView: {
    paddingHorizontal: 10,
    paddingVertical:   10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '$white'
  },
  name: {
    color: '$darkText',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  dimensions: {
    color: '$darkText',
    fontSize: 13,
    justifyContent: 'center'
  },
  price: {
    color: '$darkText',
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
    backgroundColor: '$border',
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20
  }
  });
