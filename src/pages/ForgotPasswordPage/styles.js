import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'salmon',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    texto:{
        fontSize: 30
    },
    ImgLogo:{
        width: '100px',
        height: '100px',
    },
    txtbtm:{
        fontWeight: 600,
    },
    btm:{
        margin: 10,
        padding: 5,
        paddingInline: 20,
        border: '2px solid',
        backgroundColor: 'yellow',
        width: 163,
        alignItems: 'center'
    },
    InputEmail:{
        margin: 5,
        border: '2px solid black',
        color: 'gray',
        backgroundColor: 'white',
    },
    InputSenha:{
        WebkitTextSecurity: 'disc',
        margin: 5,
        border: '2px solid black',
        color: 'gray',
        backgroundColor: 'white',
    },
    NavPara:{
        color: 'white',
        fontWeight: 600,
    },
});

export default styles;