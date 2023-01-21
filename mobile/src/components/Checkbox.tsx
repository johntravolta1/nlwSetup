import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import {Feather} from '@expo/vector-icons'
import colors from "tailwindcss/colors";
import Animated, { FlipInXDown, FlipOutXUp, RotateInUpLeft } from "react-native-reanimated";

interface Props extends TouchableOpacityProps {
    checked?: boolean;
    title: string;
}

export function Checkbox({checked = false, title, ...rest}: Props) {
    return (
        <TouchableOpacity {...rest} activeOpacity={0.7} className='flex-row mb-2 items-center'>
            {checked ? 
                <Animated.View
                 className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center"
                 entering={FlipInXDown}
                 exiting={FlipOutXUp}
                >
                    <Feather
                        name='check'
                        size={20}
                        color={colors.white}
                    ></Feather>
                </Animated.View>
            :
                <View className="h-8 w-8 bg-zinc-900 rounded-lg"></View>
            }

            <Text className="text-white text-base ml-3">{title}</Text>
        </TouchableOpacity>
    )
}