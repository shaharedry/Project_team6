import React ,{ useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Schovid/components/Header';
import FirstScreen from './Screens/FirstScreen';
import * as Font from 'expo-font';
import {AppLoading} from 'expo-app-loading';
import { FontDisplay } from 'expo-font';
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import Navigation from './navigation/Navigation';

/*const FetchFonts =()=>{
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}*/


export default function App() {
  /*const [FontLoaded,setFontLoaded] = useState(false);

  if(!FontLoaded){
    return (
    <AppLoading
      startAsync={FetchFonts}
      onFinish={() => setFontLoaded(true)}
      />
      );
    } */
  return <Navigation/>;
}

const styles = StyleSheet.create({
  screen:{ 
    flex: 1
  }
});