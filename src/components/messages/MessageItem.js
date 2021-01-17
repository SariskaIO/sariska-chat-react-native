
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../../assets/styles/_color';


const MessageItem = ({user, message}) => {
    return (
        <View style={styles.view} >
            <Text style={styles.avatar}>
                {user.name.toUpperCase().slice(0,1)}
            </Text>
            <Text style={styles.message}>
                {message.content || message}
            </Text>
        </View>
    );

}

export default MessageItem;

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        backgroundColor: `${colors.blue}`,
        width: 30,
        height: 30,
        borderRadius: 30,
        padding: 5,    
        paddingLeft: 10,
        marginRight: 10,
        marginVertical: 5,
        color: `${colors.white}`   
    },
    message: {
        backgroundColor: `${colors.white}`,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopLeftRadius: 0,
        borderRadius: 5   
    }
})