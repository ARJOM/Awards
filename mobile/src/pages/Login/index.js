import React from 'react';
import { Input, Block, Button, Text } from 'galio-framework';
import { TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Login() {
    return(
        <Block style={styles.container}>
            <Text style={styles.title}>Faça seu login</Text>
            <Input style={styles.loginInput} placeholder="Username"/>
            <Input style={styles.loginInput} placeholder="Password" password viewPass />
            <Button style={styles.confirmButton} color="#43a047">Log In</Button>
            <TouchableOpacity
                style={styles.registerButton}
                onPress={() => {}}
            >
                <Text style={styles.registerButtonText}>Não tenho cadastro</Text>
            </TouchableOpacity>
        </Block>
    )
}