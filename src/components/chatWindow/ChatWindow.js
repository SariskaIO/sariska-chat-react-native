import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import MessageList from '../messages/MessageList'

const ChatWindow = ({messages, pushMessage, user, room}) => {
    const [text, setText] = useState('');
    const [chat, setChat] = useState('');
    //const [user, setUser] = useState(null);


    const isMessageEmpty = (text) => {
        return adjustTextMessage(text).length === 0;
    }
    
    const adjustTextMessage = (text) => {
        return text.trim();
    };
    const disableButton = isMessageEmpty(text);

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        !disableButton && 
        pushMessage(text);
        setChat(chat => [...chat,text]);
        !disableButton && setText('');
    }


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
    // },[text])

    console.log('userDetails are', user);
    
    console.log('text is', text);

    console.log('room is', room);
    return (
           <>
             <Text>Hey! Gurudeep</Text>
             <View style={styles.chatBox}>
                <MessageList messages={messages} user={user} pushMessage={pushMessage} room={room}/>
            </View>
                <View>
                  <TextInput 
                    placeholder="Enter Text Here"
                    onSubmitEditing={pushMessage}
                    style={styles.input}
                    />
                </View>
           </>
    )
}

export default ChatWindow;


const styles = StyleSheet.create({
    chatBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginVertical: 5
    },
    input: {
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      borderRadius: 10
    }

  });

