import { View, Text, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "@/src/components/input";
import { Button } from "@/src/components/button";
import { Categories } from "@/src/components/categories";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { linkStorage } from "@/src/storage/link-storage";
import { colors } from "@/src/styles/colors";



export default function Edit() {
        const [category, setCategory] = useState<string>('');
        const [name, setName] = useState<string>('');
        const [url, setUrl] = useState<string>('')
      

         async function handleAdd() {
                try {
                    if (!category) {
                        return Alert.alert("Categoria", 'Selecione uma categoria');
                    }
                    if (!name.trim()) {
                        return Alert.alert("Nome", 'Digite um nome');
                    }
                    if (!url.trim()) {
                        return Alert.alert("URL", 'Digite uma URL');
                    }
        
                    await linkStorage.addLink({ id: new Date().getTime().toString(), category, name, url });            
                    
                    Alert.alert("Sucesso", "Link adicionado com sucesso", [
                        {
                            text: "Ok",
                            onPress: () => router.back()
                        }
                    ]);
        
                    // console.log({ category, name, url });
                } catch (error) {
                    Alert.alert("Erro", "Erro ao adicionar link");
                    console.log(error);
                }
            }
        
    return (
        <View style={styles.container} >
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                        </TouchableOpacity>
                        <Text style={styles.title}>Editar</Text>
                    </View>
                    <Text style={styles.label}>Selecione uma categoria</Text>
        
                    <Categories onChange={setCategory} selected={category} />
        
                    <View style={styles.form}>
                        <Input placeholder="Nome" onChangeText={setName} />
                        <Input placeholder="Url" onChangeText={setUrl} autoCapitalize="none" />
                        <Button title="Adicionar" onPress={handleAdd} />
                    </View>
                </View>
    )
}