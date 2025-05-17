import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import EnviarMsg from "./PostMsg";

export default function Form(){
    return(
        <View>
            <View>
                <Text>Nome</Text>
                <TextInput placeholder="Digite seu nome" keyboardType="default">
                </TextInput>
                <Text>Email</Text>
                <TextInput placeholder="exemplo@email.com.br" keyboardType="default"></TextInput>
                <Text>Telefone</Text>
                <TextInput placeholder="(ddd) 99999-9999" keyboardType="numeric"></TextInput>
                <Text>Endereço da ocorrência</Text>
                <TextInput placeholder="Rua xxxx, Bairro yyyy, cidade zzzz" keyboardType="default"></TextInput>
                <Button title="Enviar formulário"></Button>
            </View>
            <EnviarMsg>
            </EnviarMsg>
        </View>
    );
}