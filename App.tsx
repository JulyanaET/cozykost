import React, {useState, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SuccessSignUpScreen from './src/screens/SuccessSignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import BottomNavBar from './src/components/BottomNavBar';
import {View, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Saved':
        return <View style={styles.placeholderScreen} />;
      case 'History':
        return <View style={styles.placeholderScreen} />;
      case 'Profile':
        return <View style={styles.placeholderScreen} />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <BottomNavBar activeTab={activeTab} onTabPress={setActiveTab} />
    </View>
  );
}

function App(): React.JSX.Element {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show splash for 1.5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={showSplash ? 'Splash' : 'Main'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="SuccessSignUp" component={SuccessSignUpScreen} />
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeholderScreen: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
});

export default App;
