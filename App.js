/**
 * Sariska Chat React Native SDK
 * https://github.com/gurudeep88/sariska-chat-react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './src/screens/ChatScreen';
import { Avatar } from 'react-native-elements';
import { Text } from 'react-native';
import { View } from 'react-native';
import { colors } from './src/assets/styles/_color';

const Stack = createStackNavigator();
const GetChatTitle = ({navigation, route}) => { 
  const chatAvatar= <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
  <Avatar rounded size="small" title={route.params.name.toUpperCase().slice(0,1)} overlayContainerStyle={{backgroundColor: `${colors.white}`}} titleStyle={{ color: `${colors.blue}`, fontWeight: '700'}}/>
  <Text style={{color: '#fff', fontSize: 20, marginLeft: 10}}>{route.params.session_id}</Text>
  </View>
  return chatAvatar;
}

const App = ({navigation}) => {

  return (
      
    <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen 
          name="Chat" 
          component={ChatScreen} 
          initialParams={{session_id: 'New Room', name: 'Sariska'}}
          options={({navigation, route})=>({  
            headerTitle: props => <GetChatTitle {...props} navigation={navigation} route={route}/>,
            headerStyle: {backgroundColor: '#3f51b5'},             
            })}
            />
    </Stack.Navigator>
  );
};


export default App;
