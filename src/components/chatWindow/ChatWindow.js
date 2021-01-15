import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import MessageList from '../messages/MessageList'

const ChatWindow = ({messages, pushMessage, user, room}) => {
    
    // useEffect(()=> {
    //    const userDetails = JSON.parse(localStorage.getItem("user"));
    //    const roomDetails = JSON.parse(localStorage.getItem("room"));
    //     //setUser(userDetails);
    //     //setRoom(roomDetails);
    // },[])

    const scrollRef = useRef(null);
    // const scrollToBottom = () => {
    //     scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    //   }
    // useEffect(()=>{
    //     scrollToBottom();
    // },[text])g

    console.log('userDetails are', user);
    

    console.log('room is', room);
    return (
           <View style={styles.view}>
             <Text style={styles.text}>Hey! Gurudeep</Text>
             <View style={styles.chatBox}>
                <MessageList messages={messages} user={user} pushMessage={pushMessage} room={room}/>
            </View>
           </View>
    )
}

export default ChatWindow;


const styles = StyleSheet.create({
    view: {
        flex:1,
    },  
    text: {
        textAlign: 'center',
        marginTop: 10
    },  
    chatBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginVertical: 5,
      flex: 1
    },
    

  });

