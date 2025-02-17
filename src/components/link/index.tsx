import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type LinkProps = {
    name: string;
    url: string;
    onDetailsPress: () => void;
}

export default function Link(props: LinkProps) {
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.name} numberOfLines={1} >{props.name}</Text>
                <Text style={styles.url} numberOfLines={1}>{props.url}</Text>
            </View>
            <TouchableOpacity onPress={props.onDetailsPress}>
                <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
            </TouchableOpacity>
        </View>
    )
}