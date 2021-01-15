/**
 * Sariska Chat React Native SDK
 * https://github.com/gurudeep88/sariska-chat-react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import { Avatar, Image } from 'react-native-elements';
import { Text } from 'react-native';
import logo from './src/assets/images/logo.png';
import user from './src/assets/images/user.png';
import user1 from './src/assets/images/user1.png';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { COMPANY_LOGO } from './src/constants';

const Stack = createStackNavigator();

// const GetWelcomeLogo = () => {return (
//   <Image source={COMPANY_LOGO} style= {{width: 30, height:30, marginLeft:20}}/> 
// )
// }
// const GetWelcomeTitle = ({navigation}) => {return (
//   <Text style={{color: '#fff', fontSize: 24}} onPress={()=>{navigation.navigate('Home')}}>Sariska</Text>
//   )
// }
// const GetHomeLogo = () => {return (
//   <Image source={logo} style= {{width: 30, height:30, marginLeft:20}}/> 
// )
// }
// const GetHomeTitle = () => {return (
//   <Text style={{color: '#fff', fontSize: 24}}>Sariska</Text>
//   )
// }
// const GoToWelcome = ({navigation}) => {
//   return <Icon name="plus" onPress={()=> navigation.navigate('Welcome')} style={{fontSize: 18, color: '#fff', marginRight: 10 }}/>
// }

// const GetChatLogo = ({navigation}) => {
//   return (
//     <HeaderBackButton onPress={()=>navigation.navigate('Home')} tintColor="#fff" />
//   )
// }
const GetChatTitle = ({navigation, route}) => { 
  const chatAvatar= UserList.avatar ? 
  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
  <Avatar rounded size="medium" source={UserList.avatar} avatarStyle={{marginRight: 5, marginBottom:2, marginTop:2}} /> 
<Text style={{color: '#fff', fontSize: 20}}>{/*route.params.name*/}Guru</Text>
</View> :
<View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
  <Avatar rounded size="small" title={UserList.title} overlayContainerStyle={{backgroundColor: '#919191'}}/>
  <Text style={{color: '#fff', fontSize: 20}}>{/*route.params.name*/}Gurudeep</Text>
  </View>
  return chatAvatar;
}

const App = ({navigation}) => {

  return (
      
    <Stack.Navigator initialRouteName="Chat">
        {/* <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={({navigation})=>({ 
            headerTitle: props => <GetWelcomeTitle {...props} navigation={navigation}/>,
            headerLeft: props=><GetWelcomeLogo {...props}/>,  headerStyle: {backgroundColor: '#3f51b5'}  
            })}/>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={({navigation})=>({ 
            headerTitle: props => <GetHomeTitle {...props} navigation={navigation}/>,
            headerLeft: props=><GetHomeLogo {...props}/>,  headerStyle: {backgroundColor: '#3f51b5'},  
            headerRight: props => <GoToWelcome {...props} navigation={navigation}/>
            })}/> */}
        <Stack.Screen 
          name="Chat" 
          component={ChatScreen} 
          options={({navigation, route})=>({  
            headerTitle: props => <GetChatTitle {...props} navigation={navigation} route={route}/>,
            //headerLeft: props=><GetChatLogo {...props} navigation={navigation}/>,  
            //headerRight: props => <GoToWelcome {...props} navigation={navigation}/>,
            headerStyle: {backgroundColor: '#3f51b5'},  
            
            })}
            />
    </Stack.Navigator>
  );
};


export default App;

export const UserList = {
      id: 1, 
      name: 'Guru',
      avatar: user,
      title: '',
      lastMessage: 'Hello Guru',
      sentAt: '9:45pm'
  }
