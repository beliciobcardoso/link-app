import { Image, View, TouchableOpacity, FlatList, Modal, Text } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/src/styles/colors';
import { Categories } from '@/src/components/categories';
import Link from '@/src/components/link';
import { Option } from '@/src/components/option';
import { router } from 'expo-router';


export default function Index() {
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
            <Categories />

            <FlatList
                data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
                keyExtractor={(item) => item}
                renderItem={() => (
                    <Link name="Google" url="https://google.com" onDetailsPress={() => console.log('Clicou!!!')} />
                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
            />

            <Modal transparent visible={false} animationType="slide">
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Detalhes</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalText}>Nome: Google</Text>
                        <Text style={styles.modalText}>URL: https://google.com</Text>
                        <View style={styles.modalFooter}>
                            <Option name="Abrir" icon="language" />
                            <Option name="Editar" icon="edit" />
                            <Option name="Excluir" icon="delete" variant="secondary" />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

