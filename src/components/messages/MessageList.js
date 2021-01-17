import React, { useRef, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../assets/styles/_color';
import MessageItem from './MessageItem';

const MessageList = ({messages, room, pushMessage, user}) => {

  const [text, setText] = useState('');


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
    const scrollRef = useRef(null);

    console.log('text is', messages);
    return (
          <View style={styles.view}>
            <FlatList 
              data={messages}
              renderItem={({item})=><MessageItem message={item} user={user}/>}
              keyExtractor={(item)=> item.id + Math.floor(Math.random()*100).toString()}
              ref={scrollRef}
              onContentSizeChange={() => scrollRef.current.scrollToEnd({animated: true})}
              style={styles.cardConainer} 
              />
            <View style={styles.viewInput}>
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
      paddingTop: 10,
      backgroundColor: `${colors.gray}`,
      paddingBottom: 0
    },
    cardConainer: {
      flex: 1,
      paddingLeft : 10,
      paddingRight : 10,
    },
    viewInput:{
      width: '100%',
      elevation: 10,
      height: 60,
      backgroundColor: '#fff',
      justifyContent: 'flex-end'
    },
    input: {
      height: 55, 
      borderColor: `${colors.blue}`, 
      borderWidth: 1, 
      borderRadius: 1,
      backgroundColor: `#454545`,
      fontWeight:"700",
      color: `${colors.white}`,
      paddingLeft: 10
    }
  });
