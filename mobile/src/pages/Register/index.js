import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Input, Block, Button, Text, Radio } from 'galio-framework';
import styles from "./styles";
import {TouchableOpacity} from "react-native";

export default function Register() {
    const navigation = useNavigation();

    return(
        <Block style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <Input style={styles.registerInput} placeholder="Nome de usuário"/>
            <Input style={styles.registerInput} placeholder="E-mail" email-address/>
            <Input style={styles.registerInput} placeholder="Senha" password viewPass />
            {/*TODO corrigir Radio para aceitar somente um clique*/}
            <Block style={styles.genderInput}>
                <Radio style={styles.genderRadio} color='#9FA5AA' name="gender" label="Masculino"/>
                <Radio style={styles.genderRadio} color='#9FA5AA' name="gender" label="Feminino"/>
            </Block>
            <Button style={styles.confirmButton} color="#43a047">Cadastrar</Button>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.goBack() }
            >
                <Text style={styles.loginButtonText}>Voltar para o Login</Text>
            </TouchableOpacity>
        </Block>
    )
}