import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create ({
    container: {
      backgroundColor: 'salmon',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    texto:{
        fontSize: 30,
    },
    ImgLogo:{
        width: '100px',
        height: '100px',
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