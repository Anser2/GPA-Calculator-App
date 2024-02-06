import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import Bottom Tab Navigator
import { name as appName } from './app.json';
import { LogBox } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { app } from './FirebaseConfig'; // Import your Firebase config
import firebase from 'firebase/compat/app'; // Correct import for the Firebase module
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import { app_auth } from './FirebaseConfig';
import { User, onAuthStateChanged } from 'firebase/auth';
import AboutMe from './Screens/AboutMe';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); // Create Bottom Tab Navigator
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AboutMeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='AboutMe' component={AboutMe} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(app_auth, (user) => {
      console.log('user', user)
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      {
        user ? (
          <Tab.Navigator screenOptions={{tabBarActiveBackgroundColor: "black", tabBarInactiveBackgroundColor:"black", tabBarActiveTintColor:"orange"}}
          >
            <Tab.Screen name='Home' component={HomeStack} options={{headerShown: false}} />
            <Tab.Screen name='About Me' component={AboutMeStack} options={{headerShown: false}} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
          </Stack.Navigator>
        )
      }
    </NavigationContainer>
  );
};

// Register the main component
AppRegistry.registerComponent(appName, () => App);

export default App;
