import { View, Text, TextInput, Image, TouchableOpacity } from "react-native-web"
import styles from "./styles"
import { Link } from "@react-navigation/native"

export default function LoginPage(){



    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Pagina de Login</Text>
            <TextInput style={styles.InputEmail} placeholder="Email"></TextInput>
            <TextInput style={styles.InputSenha} placeholder="Senha"></TextInput>
            <TouchableOpacity style={styles.btm}>
                <Link  style={styles.txtbtm} to={{screen: "DashboardPage"}}>Login</Link>
            </TouchableOpacity>
            <Link  style={styles.NavPara} to={{screen: "RegisterPage"}}>Ir para o registro</Link>
            <Link style={styles.NavPara} to={{screen: "ForgotPasswordPage"}}>Recuperar senha</Link>
        </View>
)
}
