import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import DropDown from './screens/DropDown'

EStyleSheet.build({
	$backgroundgrey: '#bec6e9',
	$white: '#FFFFFF',
 	$lightGray: '#F0F0F0',
 	$border: '#E2E2E2',
 	$inputText: '#797979',
 	$darkText: '#343434',
});

export default () => < DropDown/>;
