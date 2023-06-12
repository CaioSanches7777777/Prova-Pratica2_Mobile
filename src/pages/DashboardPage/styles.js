import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        backgroundColor: 'salmon',
      },
    texto:{
        fontSize: 30
    },
    txtbtm:{
        fontWeight: 600,
        width: 159,
        textAlign: 'center',
    },
    btm:{
        margin: 10,
        paddingBottom: '5px',
        paddingTop: '5px',
        border: '2px solid',
        backgroundColor: 'yellow',
        alignItems: 'center',
        marginRight: 'auto',
    }
});

export default styles;