
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: '90%',
        bottom: 0,
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 30,
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: '#000000',
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    btnEntrar: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#f23005',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    txtEntrar: {
        fontSize: 20,
        color: '#3c3c3c',
    },
    boxTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    textTitle:{
        color:'#f23045',
        fontSize:30,
        fontWeight:'bold',
    }
});

export default styles
