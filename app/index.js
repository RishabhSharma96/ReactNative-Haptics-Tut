import React, { useCallback, useEffect } from 'react';
import { ScrollView, Text, View, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import "../global.css";
import GameLogic from '../components/GameLogic';

const Index = () => {

    const [fontsLoaded, fontError] = useFonts({
        PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    });

    useEffect(() => {
    }, [fontsLoaded]);

    if (!fontsLoaded && !fontError) return null;

    return (
        <SafeAreaView className="bg-green-300 h-full">
            <ScrollView>
                <View className="h-[100vh] flex justify-center items-center">
                    <GameLogic />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Index;
