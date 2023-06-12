import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'salmon',
        width: '100%',
        padding: '10%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    viewImg: {
        width: 200,
        height: 250
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    viewData: { 
        backgroundColor: '#a56c2a',
        padding: 10,
        width: 300,
        height: '100%',
        alignItems: 'center'
        
    },
    nome: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginBotton: 5,
        padding: 5,
        backgroundColor: '#4dcb74'
    },
    atributos: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
        margin: 5,
        padding: 5,
        backgroundColor: '#a5992a'
    },
    descricao: {
        fontSize: 14,
        color: 'black',
        marginBotton: 5,
        padding: 5,
        backgroundColor: '#b39e86'
    },
    btn: {
        padding: 10
    }
});

export default styles;