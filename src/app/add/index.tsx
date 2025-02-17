import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/src/styles/colors";
import { router } from "expo-router";
import { Categories } from "@/src/components/categories";

export default function Add() {
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.title}>Adicionar</Text>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>
                <Text style={styles.title}>Novo</Text>
            </View>
            <Text style={styles.label}>Selecione uma categoria</Text>
            <Categories />
        </View>
    )
}