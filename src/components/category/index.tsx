import { View, Text, Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

type CategoryProps = PressableProps & {
    id?: string;
    name: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    isSelected: boolean;
}


export function Category(props: CategoryProps) {
    const color = props.isSelected ? colors.green[300] : colors.gray[400];
    return (
        <Pressable style={styles.container} {...props}>
            <MaterialIcons name={props.icon} size={16} color={color} />
            <Text style={[styles.name, { color }]}>{props.name}</Text>
        </Pressable>
    );
}