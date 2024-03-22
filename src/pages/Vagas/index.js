import { View, Text, ScrollView } from 'react-native'
import {styles} from './styles'
import Vaga from '../../components/Vaga'

function Vagas(){
  return(
    <View style={styles.tela}>

      <Text style={styles.titulo}>Vagas</Text>
  
        <ScrollView>
          
          <Vaga titulo='Desenvolvedor Backend' salario='R$ 3500' descricao='Trabalhar muito com NodeJS' contato='Daniel - 011 987654321 ou dani@gmail.com'/>

          <Vaga titulo='Desenvolvedor Backend' salario='R$ 3500' descricao='Trabalhar muito com NodeJS' contato='Daniel - 011 987654321 ou dani@gmail.com'/>

          <Vaga titulo='Desenvolvedor Backend' salario='R$ 3500' descricao='Trabalhar muito com NodeJS' contato='Daniel - 011 987654321 ou dani@gmail.com'/>

          <Vaga titulo='Desenvolvedor Backend' salario='R$ 3500' descricao='Trabalhar muito com NodeJS' contato='Daniel - 011 987654321 ou dani@gmail.com'/>

          <Vaga titulo='Desenvolvedor Backend' salario='R$ 3500' descricao='Trabalhar muito com NodeJS' contato='Daniel - 011 987654321 ou dani@gmail.com'/>

          <Vaga titulo='Desenvolvedor Backend' salario='R$ 3500' descricao='Trabalhar muito com NodeJS' contato='Daniel - 011 987654321 ou dani@gmail.com'/>

          <Vaga titulo='Desenvolvedor Backend' salario='R$ 3500' descricao='Trabalhar muito com NodeJS' contato='Daniel - 011 987654321 ou dani@gmail.com'/>

          <Vaga titulo='Desenvolvedor Backend' salario='R$ 3500' descricao='Trabalhar muito com NodeJS' contato='Daniel - 011 987654321 ou dani@gmail.com'/>

          <Vaga titulo='Desenvolvedor Backend' salario='R$ 3500' descricao='Trabalhar muito com NodeJS' contato='Daniel - 011 987654321 ou dani@gmail.com'/>

          <Vaga titulo='Desenvolvedor Backend' salario='R$ 3500' descricao='Trabalhar muito com NodeJS' contato='Daniel - 011 987654321 ou dani@gmail.com'/>
        
        </ScrollView>
    </View>
  )
}

export default Vagas