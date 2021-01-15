import React from 'react'
import { View, Text, StatusBar, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Avatar, ListItem } from 'react-native-elements';
import user from '../../assets/images/user.png';
import user1 from '../../assets/images/user1.png';
import { Image } from 'react-native-elements';
import { Header } from 'react-native-elements';
import logo from '../../assets/images/logo.png'


const LeftComponent = () => {
  return (<Image
    source={logo}
    style={{ width: 20, height: 20, marginTop:10}}
  />)}
  
const index = ({navigation, route}) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
            
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                    <View>
                      {
                      UserList.map((l, i) => (
                        <ListItem key={i} bottomDivider onPress={
                          ()=>{
                            navigation.navigate('Chat')
                          }
                        }>
                            { l.avatar ? 
                          <Avatar rounded size="medium" source={l.avatar} /> :
                          <Avatar rounded size="medium" title={l.title} overlayContainerStyle={{backgroundColor: '#3f51b5'}}/>
                          }
                          <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.lastMessage}</ListItem.Subtitle>
                          </ListItem.Content>
                          <Text>{l.sentAt}</Text>
                        </ListItem>
                      ))
                    }
                  </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default index;

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    body: {
      backgroundColor: Colors.white,
    },
  });

export const UserList = [
      {
          id: 1, 
          name: 'Guru',
          avatar: user,
          title: '',
          lastMessage: 'Hello Guru',
          sentAt: '9:45pm'
      },
      {
          id: 2, 
          name: 'Brajendra',
          avatar: user1,
          title: '',
          lastMessage: 'Hello Brajendra',
          sentAt: 'Yesterday'
      },
      {
          id: 3, 
          name: 'Guru',
          avatar: user,
          title: '',
          lastMessage: 'Hello Guru',
          sentAt: '08/01/2021'
      },
      {
          id: 4, 
          name: 'Brajendra',
          avatar: user1,
          title: '',
          lastMessage: 'Hello Brajendra',
          sentAt: '07/01/2021'
      },
      {
        id: 5, 
        name: 'Guru',
        avatar: '',
        title: 'GS',
        lastMessage: 'Hello Guru',
        sentAt: '08/01/2021'
    },
    {
        id: 6, 
        name: 'Brajendra',
        avatar: user1,
        title: '',
        lastMessage: 'Hello Brajendra',
        sentAt: '08/01/2021'
    },
    {
        id: 7, 
        name: 'Guru',
        avatar: user,
        title: '',
        lastMessage: 'Hello Guru',
        sentAt: '08/01/2021'
    },
    {
        id: 8, 
        name: 'Brajendra',
        avatar: '',
        title: 'BR',
        lastMessage: 'Hello Brajendra',
        sentAt: '08/01/2021'
    },{
        id: 9, 
        name: 'Guru',
        avatar: '',
        title: 'GS',
        lastMessage: 'Hello Guru',
        sentAt: '08/01/2021'
    },
    {
        id: 10, 
        name: 'Brajendra',
        avatar: '',
        title: 'BR',
        lastMessage: 'Hello Brajendra',
        sentAt: '08/01/2021'
    },
  ]