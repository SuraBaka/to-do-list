import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AddTodoScreen from './screens/AddTodoScreen';
import ViewTodoScreen from './screens/ViewTodoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator initialRouteName="ViewTodos"></StackNavigator>
         <Stack.Screen 
         name="AddTodo" 
         component={AddTodoScreen}
         options= {{ title: 'Tambah To-Do ' }}
         />
          <Stack.Screen 
         name="ViewTodos" 
         component={ViewTodoScreen}
         options= {{ title: 'Daftar To-Do ' }}
         />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;