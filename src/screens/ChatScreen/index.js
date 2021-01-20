import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import CreateChannel from '../../api/channel/CreateChannel';
import UseEventHandler from '../../api/channel/UseEventHandler';
import ChatWindow from '../../components/chatWindow/ChatWindow';
import { colors } from '../../assets/styles/_color';


  
const index = ({navigation: {setParams}}) => {
  const [user, setUser] = useState({});
  const [room, setRoom] = useState({});
  const [messages, setMessages] = useState([]);

  const chatChannel = CreateChannel('chat:room123', {});

  UseEventHandler(chatChannel, 'user_joined', response => {
       const {room, user}  = response;
       setUser(user);
       setRoom(room);
       const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('user', jsonValue)
        } catch (e) {
          // saving error
        }
      }
      storeData({id : user.id, name: user.name});
      setParams({
        session_id: room.session_id,
        name: user.name
      })
  });

  UseEventHandler(chatChannel, 'new_message', message => {
      console.log('newMessage', message);
      setMessages(messages => [...messages, message])
  });

  UseEventHandler(chatChannel, 'archived_message', message => {
       console.log('archived', message)
      setMessages(messages => [message, ...messages])
  });

  UseEventHandler(chatChannel, 'archived_message_count', payload => {
     const { page: { count }} = payload;
     console.log('total archived message count', count);
  });

  const pushMessage = (message)=>{
      setMessages(messages => [...messages, message]);
      chatChannel.push('new_message', {content: message});
  };
    return (
        <>
            <SafeAreaView style={{flex:1}}>
              <View
                style={styles.scrollContainer}
                >
                  <ChatWindow messages={messages} pushMessage={pushMessage} user={user} room={room}/>
                </View>
            </SafeAreaView>
        </>
    )
}

export default index;

const styles = StyleSheet.create({
    scrollContainer: {
      paddingBottom:0,
      backgroundColor: `${colors.gray1}`,
      flex:1,
      justifyContent: 'space-between',
    }
  });
