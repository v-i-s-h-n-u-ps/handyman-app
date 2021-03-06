import { StyleSheet, Dimensions } from 'react-native';

import Colors from "../../utils/constants/colors";

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        position: 'relative',
    },
    backgroundImage: {
        width: "100%",
        height: 350,
        padding: 20,
        paddingVertical: 40,
        position: 'absolute',
        top: 0
    },
    serviceContainer: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        marginBottom: SCREEN_WIDTH / 15,
        borderRadius: 10,
        shadowOffset: {
            width: 1,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: .7
    },
    selectServiceHeader: {
        borderBottomColor: '#cecece',
        padding: 8,
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 18,
        color: Colors.secondaryTextColor,
    },
    services: {
        paddingTop: SCREEN_WIDTH / 20,
    },
    or: {
        marginVertical: 8,
        color: Colors.primaryBackgroundColor,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor: Colors.primaryTextColor,
        textShadowOffset: { height: 1 },
        textShadowRadius: 10
    },
    addService: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: SCREEN_WIDTH / 8,
        paddingLeft: 15,
        backgroundColor: 'transparent',
    },
    contactUs: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: SCREEN_WIDTH / 8,
        paddingLeft: 15,
        backgroundColor: 'transparent',
    },
    callNumber: {
        fontSize: SCREEN_WIDTH / 19,
        color: Colors.blue,
        paddingRight: 10,
        fontWeight: 'bold'
    },
    howItWorks: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH * .53,
    },
})