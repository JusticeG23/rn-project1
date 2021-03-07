import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
    const [outputText, setOutputText] = useState('I figured out how to change the text. yay.');
    return (
        <View style={styles.container}>
            <tr>
                {/*<Text>{outputText}</Text>*/}
                <td><Button title="Login" onPress={() => setOutputText('wow, it\'s different')}/></td>
                {/*<Text> <br /></Text>*/}
                <td><Text>    or    </Text></td>
                {/*<Text> <br /></Text>*/}
                <td><Button title="Sign Up" onPress={() => setOutputText('wow, it\'s different')}/></td>
            </tr>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#996633',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
