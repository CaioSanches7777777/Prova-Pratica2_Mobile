import { View, Text, TextInput, Image, TouchableOpacity } from "react-native-web"
import styles from "./styles"
import { Link } from "@react-navigation/native"

export default function LoginPage(){



    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Pagina de Recuperar Senha</Text>
            <TextInput style={styles.InputEmail} placeholder="Email"></TextInput>
            <TextInput style={styles.InputSenha} placeholder="Nova Senha"></TextInput>
            <TextInput style={styles.InputSenha} placeholder="Confirmar Nova Senha"></TextInput>
            <TouchableOpacity style={styles.btm}>
                <Text style={styles.txtbtm}>Login</Text>
            </TouchableOpacity>
            <Link style={styles.NavPara} to={{screen: "LoginPage"}}>Ir para o login</Link>
        </View>
)
}
