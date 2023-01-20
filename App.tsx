import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Text, View} from 'react-native';

export default function App() {
    return (
        <View className='flex-1 items-center justify-center bg-blue-200 '>
            <Text className='text-lg text-red-900'>Open up App.js to start working on your app!</Text>
            <StatusBar hidden={false}/>
        </View>
    );
}
