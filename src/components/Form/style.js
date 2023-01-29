import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        display: 'flex',
        width: '100%',
        height: '100%',
        bottom: 0,
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
        marginTop: 30,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        padding: 20,
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: '#222',
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: '90%',
        borderRadius: 12,
        backgroundColor: '#d6d6d6',
        height: 40,
        margin: 12,
        paddingLeft: 20,
        marginBottom: 30,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        backgroundColor: '#3a3a3a',
        paddingTop: 15,
        paddingBottom: 15,
        margin: 30,
    },
    textButtonCalculator: {
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#ddd',
    }
})

export default styles