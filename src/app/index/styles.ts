import { StyleSheet } from 'react-native';
import { colors } from '@/src/styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 4,
     
    },
    title: {
        color: colors.gray[900],
        fontSize: 22,
    },
    logo: {
        width: 38,
        height: 32,
    },
    header: {
        padding: 16,
        marginBottom: 16,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.gray[900],
    },
    links: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[400],
    },
    linksContent: {
        gap: 2,
        padding: 16,
        paddingBottom: 100,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 16,
        backgroundColor: colors.gray[100],
        borderRadius: 8,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    modalTitle: {
        color: colors.gray[900],
        fontSize: 18,
    },
    modalText: {
        color: colors.gray[900],
        fontSize: 16,
        marginBottom: 8,
    },
    modalUrl: {
        color: colors.gray[500],
        fontSize: 16,
        marginBottom: 8,
    },
    modalFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: colors.gray[400],
        paddingVertical: 8,

    },
});