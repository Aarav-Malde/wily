import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Searchscreen from './screens/Searchscreen';
import Booktransactionscreen from './screens/Booktransactionscreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default function App() {
  return (
    <AppContainer></AppContainer>
  );
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: Booktransactionscreen},
  Search: {screen: Searchscreen},
},
{
    defaultNavigationOptions: ({
      navigation
    })=>(
    {
      tabBarIcon: ()=>{ 
        const routename = navigation.state.routeName
        if(routename== "Transaction"){
          return(
            <Image source= {require("./assets/book.png")} style={{width: 40, height: 40}}></Image> 
          )
        }
        else if(routename== "Search"){
          return(
            <Image source= {require("./assets/searchingbook.png")} style={{width: 40, height: 40}}></Image> 
          )
        }
      }
    }
    )
}
)

const AppContainer = createAppContainer(
  TabNavigator
)
