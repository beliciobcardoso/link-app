import { Image, View, TouchableOpacity, FlatList, Modal, Text, Alert, Linking } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/src/styles/colors';
import { Categories } from '@/src/components/categories';
import Link from '@/src/components/link';
import { Option } from '@/src/components/option';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { categories } from '@/src/utils/categories';
import { linkStorage, LinkStorage } from '@/src/storage/link-storage';


export default function Index() {
    const [category, setCategory] = useState<string>(categories[0].name);
    const [links, setLinks] = useState<LinkStorage[]>([]);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [link, setLink] = useState<LinkStorage>({} as LinkStorage);

    function handleDetailsPress(selectedLink: LinkStorage) {
        setModalVisible(true);
        setLink(selectedLink);
    }

    function handleEditPress(id: string) {
        setModalVisible(false);
        router.push("/edit")
        
    }

    async function handleOpenPress() {
        try {
            await Linking.openURL(link.url);
            setModalVisible(false);
        } catch (error) {
            Alert.alert("Erro", "Erro ao abrir link");
        }
    }

    function handleRemovePress(id: string) {
        try {
            Alert.alert("Excluir", "Deseja excluir o link?", [
                {
                    text: "Não",
                    style: "cancel"
                },
                {
                    text: "Excluir",
                    onPress: async () => {
                        await linkStorage.removeLink(link.id);
                        getLinks();
                        setModalVisible(false);
                    },

                }
            ]);
        }
        catch (error) {
            Alert.alert("Erro", "Erro ao excluir link");
        }
    }

    async function getLinks() {
        try {
            const response = await linkStorage.getLinks();
            const filteredLinks = response.filter(link => link.category === category);
            setLinks(filteredLinks);
        } catch (error) {
            Alert.alert("Erro", "Erro ao buscar links");
        }
    }


    useFocusEffect(
        useCallback(() => {
            getLinks();
        }
            , [category])
    );



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('@/src/assets/logo.png')}
                    style={styles.logo}
                />
                <TouchableOpacity onPress={() => router.navigate("/add")}>
                    <MaterialIcons name="add-circle" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>
            <Categories onChange={setCategory} selected={category} />

            <FlatList
                data={links}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link name={item.name} url={item.url} onDetailsPress={() => handleDetailsPress(item)} />
                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
            />

            <Modal transparent visible={modalVisible} animationType="slide" >
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>{link.category}</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalText}>{link.name}</Text>
                        <Text style={styles.modalUrl}>{link.url}</Text>
                        <View style={styles.modalFooter}>
                            <Option name="Abrir" icon="language" onPress={handleOpenPress} />
                            <Option name="Editar" icon="edit" onPress={()=> handleEditPress(link.id) } />
                            <Option name="Excluir" icon="delete" variant="secondary" onPress={() => handleRemovePress(link.id)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
