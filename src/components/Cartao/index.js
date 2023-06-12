import { StyleSheet } from "react-native";
import { Button, Image, Text, View } from "react-native";
import styles from './styles';

export default function Cartao(props){
    return(
        <View style={styles.container}>
            
            <View style={styles.viewData}>
                <View style={styles.viewImg}>
                    <Image source={{uri: props.Cartao.imgUrl}} style={styles.img}></Image>
                </View>
                <Text style={styles.nome}> {props.Cartao.nome}</Text>
                <Text style={styles.atributos}> {props.Cartao.atributos}</Text>
                <Text style={styles.descricao}> {props.Cartao.descricao}</Text>
                <Button style={styles.btn} title="Trocar"></Button>
            </View>
        </View>
    )
}