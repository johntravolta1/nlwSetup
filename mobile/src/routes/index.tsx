import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { AppRoutes } from "./app.routes";


export function Rotues() {
    return (
        <View className="flex-1 bg-background">
            <NavigationContainer>
                <AppRoutes></AppRoutes>
            </NavigationContainer>
        </View>
    )
}