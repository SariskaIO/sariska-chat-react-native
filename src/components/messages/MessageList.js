import React, { useState } from 'react'
import { StyleSheet, Text, TextInput } from 'react-native';
import { View } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import { colors } from '../../assets/styles/_color';
import MessageItem from './MessageItem';

const MessageList = ({messages, room, pushMessage}) => {

  const [text, setText] = useState('');
    //const [user, setUser] = useState(null);


    const isMessageEmpty = (text) => {
        return adjustTextMessage(text).length === 0;
    }
    
    const adjustTextMessage = (text) => {
        return text.trim();
    };
    const disableButton = isMessageEmpty(text);

    const handleChange = (text) => {
        setText(text)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        !disableButton && 
        pushMessage(text);
        !disableButton && setText('');
    }

    console.log('text is', messages);
    return (
          <View style={styles.view}>
            <View style={styles.cardConainer}>
            {messages.map((message, id)=> {
                return (
                    <MessageItem message={message} id={id} user={user} key={id}/>
                )
            })}
            </View>
            <View>
              <TextInput
                placeholder="Enter Text Here"
                onSubmitEditing={handleSubmit}
                onChangeText={handleChange}
                style={styles.input}
                value={text}
                placeholderTextColor={`${colors.white}`}
                />
            </View>
          </View>
            
    )
}


export default MessageList;

const styles = StyleSheet.create({
    view: {
      flex: 1, 
      paddingLeft : 10,
      paddingRight : 10,
      paddingTop: 10,
      backgroundColor: `${colors.gray}`
    },
    cardConainer: {
      flex: 1,
    },
    input: {
      height: 40, 
      borderColor: `${colors.blue}`, 
      borderWidth: 1, 
      borderRadius: 10,
      backgroundColor: `${colors.skyblue}`,
      fontWeight:"700",
      color: `${colors.white}`
    }
  });

  const user = {
    name: 'gurudeep'
  }