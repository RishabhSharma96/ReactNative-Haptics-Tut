import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import React, { useState } from 'react';
import * as Haptics from 'expo-haptics';
import DiceOne from '../assets/images/One.png';
import DiceTwo from '../assets/images/Two.png';
import DiceThree from '../assets/images/Three.png';
import DiceFour from '../assets/images/Four.png';
import DiceFive from '../assets/images/Five.png';
import DiceSix from '../assets/images/Six.png';


const diceImages = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];

const GameLogic = () => {
    const [img, setImg] = useState(DiceOne);
    const [isRolling, setIsRolling] = useState(false);

    const handleRollDice = async () => {
        if (isRolling) return;
        setIsRolling(true);

        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * 6);
            setImg(diceImages[randomIndex])
            await new Promise(resolve => setTimeout(resolve, 70));
        }

        const randomIndex = Math.floor(Math.random() * 6);
        setImg(diceImages[randomIndex]);
        setIsRolling(false);
    };

    return (
        <View className="flex justify-center items-center gap-5">
            <Image
                className="h-[200px] w-[200px]"
                source={img}
            />

            <TouchableOpacity
                className="flex justify-center items-center w-[300px] h-12"
                onPress={
                    () => {
                        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
                        handleRollDice()
                    }
                }
            >
                <Text className="bg-purple-300 text-white font-extrabold text-center w-full h-full flex items-center justify-center rounded-md pt-3">
                    Roll Dice
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default GameLogic;
