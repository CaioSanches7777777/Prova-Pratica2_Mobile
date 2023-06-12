import { View, Text, TextInput, TouchableOpacity } from "react-native-web"
import styles from "./styles"
import { Link } from "@react-navigation/native"

export default function RegisterPage(){



    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Pagina de registro</Text>
            <TextInput style={styles.InputEmail} placeholder="Email"></TextInput>
            <TextInput style={styles.InputTel} placeholder="Número de Telefone"></TextInput>
            <TextInput style={styles.InputSenha} placeholder="Senha"></TextInput>
            <TextInput style={styles.InputSenha} placeholder="Confirmar Senha"></TextInput>
            <TouchableOpacity style={styles.btm}>
                <Text style={styles.txtbtm}>Registrar</Text>
            </TouchableOpacity>
            <Link style={styles.NavPara} to={{screen: "LoginPage"}}>Ir para o login</Link>
        </View>
)
}
