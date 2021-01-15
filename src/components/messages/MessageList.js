import React, { useState } from 'react'
import { StyleSheet, Text, TextInput } from 'react-native';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';

const MessageList = ({messages, room, pushMessage}) => {

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
        setText(text)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        !disableButton && 
        pushMessage(text);
        setChat(chat => [...chat,text]);
        !disableButton && setText('');
    }


    return (
        <View className="messageList">
            {messages.map((message, id) => {
                return (
                    <>
                    <View style={styles.chatView}>
                        <Text style={styles.textColor} key={id}>{message} good</Text>
                      </View>
                      <View>
                      { user.avatar ? 
                          <Avatar rounded size="medium" source={user.avatar} /> :
                          <Avatar rounded size="medium" title={user.name.slice(0,2)} overlayContainerStyle={{backgroundColor: '#3f51b5'}}/>
                          }
                      </View>
                    </>
                )
            })}
            <View>
                        <TextInput
                          placeholder="Enter Text Here"
                          onSubmitEditing={handleSubmit}
                          onChangeText={handleChange}
                          style={styles.input}
                          />
                      </View>
                      <View>
                        <Text>{text} is ok</Text>
                      </View>
        </View>
    )
}


export default MessageList;

const styles = StyleSheet.create({
    chatView: {
      backgroundColor: '#3da1d7',
      color: '#fff',
      borderRadius: 10,
      padding:10,
      width: '70%'
    },  
    textColor: {
      color: '#fff'
    }

  });

  const user = {
    name: 'gurudeep'
  }