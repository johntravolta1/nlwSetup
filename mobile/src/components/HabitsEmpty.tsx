import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

export function HabitEmpty() {
    const {navigate} = useNavigation()
    return (
        <View>
        <Text
            className="text-zinc-400 text-base block"
        >
            Você ainda não está monitorando nenhum hábito  {':( '}
            

        </Text>
        <Text className="mt-4 text-violet-400 text-base underline active:text-violet-500"
                onPress={()=> navigate('new')}>
            Comece cadastrando um
            </Text>
        </View>
    )
}