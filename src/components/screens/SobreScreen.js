import React from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SobreScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📱 Meu Bairro 📱</Text>

      <Text style={styles.paragraph}>
        Trabalho de extensão da disciplina PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS EM ANDROID (VIV0175/13431367 / 2025.1 AO VIVO) Turma 3002.
      </Text>

      <Text style={styles.paragraph}>
        O app permite a publicação de uma postagem e o cadastro de pessoas, implementando operações básicas
        de CRUD (Create, Read, Update, Delete).
      </Text>

      <Text style={styles.subtitle}>🧾 Funcionalidades</Text>
      <Text style={styles.paragraph}>
        • Envio de formulários (Publicações relacionadas ao bairro){"\n"}
        • Quadro de avisos{"\n"}
        • Calendário de eventos
      </Text>


      <Text style={styles.subtitle}>🛠️ Tecnologias Utilizadas</Text>
      <Text style={styles.paragraph}>
        • React Native{"\n"}
        • Expo{"\n"}
        • React Navigation{"\n"}
        • Context API
      </Text>

      <Text style={styles.subtitle}>📌 Observações</Text>
      <Text style={styles.paragraph}>
        Fernando Faria de Oliveira                 - Matr. 202302291406{"\n"}  
        Giovanna Canarin Monteiro                  - Matr. 202302290507{"\n"}  
        Luiz Filipe Alves Santos                   – Matr. 202302291619{"\n"}  
        Marcelo Pinheiro Gonçalves Amarante Junior – Matr. 202302673058{"\n"}  
        Naara Avelino Souza                        – Matr. 202302442323{"\n"} 
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  }
});
