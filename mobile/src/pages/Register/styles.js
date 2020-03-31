import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#f0f0f5'
    },

    title: {
        fontSize: 24
    },

    registerInput: {
        width: '100%'
    },

    genderInput: {
        marginTop: 5,
        marginBottom: 5,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    confirmButton: {
        width: '100%',
        marginTop: 10,
    },

    loginButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    loginButtonText: {
        color: '#41414d',
        fontSize: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 40,
    }

})