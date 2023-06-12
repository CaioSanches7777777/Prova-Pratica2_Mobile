import { StatusBar } from "expo-status-bar";   
import { StyleSheet, Text, View, TouchableOpacity } from "react-native-web";   
import styles from "./styles"
import Cartao from "../../components/Cartao";   
import { Link } from "@react-navigation/native"

export default function DashboardPage() {

    const cartoes =[
      {
        id: "espada1",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_ASyzpfbyJKZmZso5K--ETTMMb7k5ZAYDA&usqp=CAU",
        nome: 'Lamina da Noite',
        atributos: 'Dano físico: 85 \nDano mágico: 80',
        descricao: 'A Lamina da Noite é uma das mais poderosas laminas mágicas. Usada para forjar "A Lamina da Terra"',
      },
      {
        id: "espada2",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdW-FZAtI02Hi2O_YG13l2QXM5ZvQ5r0F-Vg&usqp=CAU",
        nome: 'Espada de ouro',
        atributos: 'Dano físico: 7 \nDano mágico: 10',
        descricao: 'Apesar de ser uma espada de digna da realeza, ela é fraca e pouco resistente à impactos físicos.',
      },
      {
        id: "armadura1",
        imgUrl: "data:image/png;base64,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",
        nome: 'Armadura de Titânio',
        atributos: 'Defesa física: 45 \nDefesa mágica: 40',
        descricao: 'Apesar de não ser a armaduram mais resistenete, em termos de danos físicos, é a mais resistente à dano de fogo. Usada para forjar armaduras de caçadores de dragões de fogo.',
      }
    ]
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btm}>
          <Link style={styles.txtbtm} to={{screen: "LoginPage"}}>LogOut</Link>
        </TouchableOpacity>
        {cartoes.map(c => <Cartao Cartao={c}></Cartao>)}
        <StatusBar style="auto" />
      </View>
    );
  }