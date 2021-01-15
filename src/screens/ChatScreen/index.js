import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Button } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import user from '../../assets/images/user.png';
import { TextInput } from 'react-native';
import MessageList from '../../components/messages/MessageList';
import CreateChannel from '../../api/channel/CreateChannel';
import UseEventHandler from '../../api/channel/UseEventHandler';
import ChatWindow from '../../components/chatWindow/ChatWindow';


  
const index = () => {
  const [user, setUser] = useState({});
  const [room, setRoom] = useState({});
  const [messages, setMessages] = useState([]);

  const chatChannel = CreateChannel('chat:room123', {});

  UseEventHandler(chatChannel, 'user_joined', response => {
       const {room, user}  = response;
       setUser(user);
       setRoom(room);
       localStorage.setItem("user",JSON.stringify({id : user.id, name: user.name}));
       localStorage.setItem("room",JSON.stringify({session_id : room.session_id, created_by: room.created_by, inserted_at: room.inserted_at}));
  });

//console.log('usersed are: ', JSON.parse(localStorage.getItem("user")) || 'hello');

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
      console.log('channel', chatChannel);
      setMessages(messages => [...messages, message]);
      chatChannel.push('new_message', {content: message});
      console.log('channel', chatChannel);
  };
  console.log('room new', room);

    return (
        <>
            <SafeAreaView style={{flex:1}}>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={styles.scrollContainer}
                >
                  <ChatWindow messages={messages} pushMessage={pushMessage} user={user} room={room}/>
                      {/* {
                    UserList.map((l, i) => (
                        <ListItem key={i}>
                            { l.avatar ? 
                          <Avatar rounded size="medium" source={l.avatar} /> :
                          <Avatar rounded size="medium" title={l.title} overlayContainerStyle={{backgroundColor: '#3f51b5'}}/>
                          }
                          <ListItem.Content>
                            <ListItem.Title>{l.lastMessage}</ListItem.Title>
                          </ListItem.Content>
                          <Text>{l.sentAt}</Text>
                        </ListItem>
                      ))
                        } */}
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default index;

const styles = StyleSheet.create({
    chatBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginVertical: 5
    },
    scrollContainer: {
      paddingBottom:0,
      backgroundColor: '#ededed',
      flex:1,
      justifyContent: 'space-between',
    },
    input: {
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      borderRadius: 10
    }

  });

  export const UserList = {
        id: 1, 
        avatar: user,
        title: '',
        lastMessage: 'Hello Guru',
        sentAt: '9:45pm'
    }
    