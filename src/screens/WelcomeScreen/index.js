import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Button } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native'
import { View, Text } from 'react-native'
import { colors } from '../../styles/_color'

const WelcomeScreen = ({navigation}) => {
    const [ name, setName ] = useState('');

    const handleChange = () => {
        setName(name);
    }
    const handlePress = () => {
        navigation.navigate('Chat', {name: name});
        setName('');
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.view}>
                <Text style={styles.welcome}>Welcome To Sariska</Text>
                <View>
                    <TextInput style={styles.input} 
                        placeholder='Please Enter Your Name' 
                        onChangeText={handleChange}
                        value={name}
                        />
                        <Button title="Go" onPress={handlePress}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen;

const styles= StyleSheet.create({
    view: {
        backgroundColor: '#dfdfdf',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    welcome: {
        fontSize: 32,
        fontWeight: '700',
        color: `${colors.blue}`
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        padding:5,
        marginVertical: 10,
        borderColor: `${colors.blue}`,
        fontWeight:'500',
    }
})